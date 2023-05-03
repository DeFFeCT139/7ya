import { ref, uploadBytes } from 'firebase/storage';
import { storage } from '../../../../../index';

export const uploadRefFile = (stateIMg) => {
  if (stateIMg === null) return;
  const imgRef = ref(storage, `file/${stateIMg.name}`,)
  uploadBytes(imgRef, stateIMg)
}