
const images = import.meta.glob<{ default: ImageMetadata }>('/src/images/**/*.{jpeg,jpg,png,gif,svg,webp}');

export async function resolveImage(imagePath?: string): Promise<ImageMetadata | undefined> {
  if (!imagePath || typeof imagePath !== 'string' || imagePath.trim() === '') {
    return undefined;
  }

  let cleaned = imagePath.replace(/\/+/g, '/');
  let imageKey: string | undefined;

  if (cleaned.includes('/src/images/')) {
    imageKey = '/src/' + cleaned.split('/src/')[1];
  } else if (cleaned.startsWith('../../images/')) {
    imageKey = cleaned.replace('../../images/', '/src/images/');
  } else if (cleaned.startsWith('/src/')) {
    imageKey = cleaned;
  } else if (cleaned.startsWith('src/')) {
    imageKey = '/' + cleaned;
  } else if (cleaned.startsWith('/')) {
    imageKey = '/src' + cleaned;
  } else {
    imageKey = '/src/' + cleaned;
  }

  if (imageKey && imageKey in images) {
    const imageModule = await images[imageKey]();
    return imageModule.default;
  }

  return undefined;
}
