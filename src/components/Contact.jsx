import config from "../config";

export default function Contact() {
  const { email, github, linkedin } = config.contact;
  return (
    <section id="contact" className="p-8 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <ul className="space-y-2 text-blue-600">
        <li><a href={`mailto:${email}`}>{email}</a></li>
        <li><a href={linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
        <li><a href={github} target="_blank" rel="noreferrer">GitHub</a></li>
      </ul>
    </section>
  );
}