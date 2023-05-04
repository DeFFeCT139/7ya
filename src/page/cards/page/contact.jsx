import phone from '../../../image/Vector (2).svg'
import mail from '../../../image/Vector (3).svg'
import web from '../../../image/Vector (4).svg'

function ContactsContent({state}) {
  return (
    <div className="contact-links">
    <a href={`tel:${state.contact[0]}`} className="contact-link">
      <div className="contact-link-left">
        <img src={phone} alt="" className="contact-link-left-img" />
      </div>
      <div className="contact-link-right">
        <div className="contact-link-right-title">Mobile phone</div>
        <div className="contact-link-right-desc">{state.contact[0]}</div>
      </div>
    </a>
    <a href={`tel:${state.contact[1]}`} className="contact-link">
      <div className="contact-link-left">
        <img src={phone} alt="" className="contact-link-left-img" />
      </div>
      <div className="contact-link-right">
        <div className="contact-link-right-title">Mobile phone</div>
        <div className="contact-link-right-desc">{state.contact[1]}</div>
      </div>
    </a>
    <a href={`mailto:${state.contact[2]}`} className="contact-link">
      <div className="contact-link-left">
        <img src={mail} alt="" className="contact-link-left-img" />
      </div>
      <div className="contact-link-right">
        <div className="contact-link-right-title">Mobile phone</div>
        <div className="contact-link-right-desc">{state.contact[2]}</div>
      </div>
    </a>
    <a href={state.contact[3]} className="contact-link">
      <div className="contact-link-left">
        <img src={web} alt="" className="contact-link-left-img" />
      </div>
      <div className="contact-link-right">
        <div className="contact-link-right-title">Mobile phone</div>
        <div className="contact-link-right-desc">{state.contact[3]}</div>
      </div>
    </a>
  </div>
  );
}

export default ContactsContent;