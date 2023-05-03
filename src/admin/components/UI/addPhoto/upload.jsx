import { ref, uploadBytes } from 'firebase/storage';
import { storage } from '../../../../index';

export const uploadFile = (stateIMg) => {
  if (stateIMg === null) return;
  const imgRef = ref(storage, `images/${stateIMg.name}`,)
  uploadBytes(imgRef, stateIMg)
}