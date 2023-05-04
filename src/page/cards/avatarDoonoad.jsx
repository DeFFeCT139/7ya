import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../../index";

export const avatar = (data) => {
  const imgref = ref(storage, `images/${data.img}`)
  getDownloadURL(imgref).then((url) => {
    document.getElementById('avatar').style.backgroundImage = `url(${url})`
  })
}