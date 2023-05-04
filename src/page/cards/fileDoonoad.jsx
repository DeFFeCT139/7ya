import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../../index";

export const file = (id,data) => {
  if (data === undefined) return 
  const imgref = ref(storage, `file/${data}`)
  getDownloadURL(imgref).then((url1) => {
    document.getElementById(id).href = url1
  })
}