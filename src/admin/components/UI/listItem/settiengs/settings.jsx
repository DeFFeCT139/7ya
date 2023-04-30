export const settings = (title, props) => {
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
      title: props.title,
      edit: props.edit,
      soc: props.soc
    }
    return settings
  } else if (title === "Partners") {
    settings = {
      desc: props.desc,
      title: props.title,
      edit: props.edit,
      link: props.link
    }
    return settings
  } else if (title === "Customers") {
    settings = {
      link: props.link,
      title: props.title,
      edit: props.edit
    }
    return settings
  }
}