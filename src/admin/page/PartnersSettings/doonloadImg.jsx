import { getDownloadURL, ref } from "firebase/storage"
import { storage } from "../../../index"
  
export const doonloadUrl = (data) =>{
  const imgref = ref(storage, `images/${data.img}`)
  getDownloadURL(imgref).then((url) => {
    document.getElementById('img12').style.backgroundImage = `url(${url})`
  })
}