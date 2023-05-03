export const settings = (title, props, index) => {
  let settings = {}
  if (title === "Services") {
    settings = {
      desc: props.desc,
      title: props.title,
      edit: props.edit
    }
    return settings
  } else if (title === "CV") {
    settings = {
      contact: props.contact,
      desc: props.desc,
      name: props.name,
      prof: props.name,
      link: props.link + Math.floor(Math.random() * (1000 - 1) + 1),
      title: props.title,
      edit: props.edit,
      soc: props.soc,
      img: props.img
    }
    return settings
  } else if (title === "Partners") {
    settings = {
      desc: props.desc,
      title: props.title,
      edit: props.edit,
      link: props.link,
      img: props.img
    }
    return settings
  } else if (title === "Customers") {
    settings = {
      link: props.link,
      title: props.title,
      edit: props.edit,
      img: props.img
    }
    return settings
  }
}