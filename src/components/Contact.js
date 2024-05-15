import "../styles/_Contact.scss";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_kk9c695",
				"template_ri6p0bb",
				form.current,
				"Pmhul8m9XceZ7jtNm"
			)
			.then(
				(result) => {
					console.log(result.text);
					const inputEnviado = document.getElementById("input-enviado");
					const inputNombre = document.getElementById("name");
					const inputEmail = document.getElementById("email");
					const inputMensaje = document.getElementById("mensaje");
					inputEnviado.value = "Enviado";
					inputEnviado.style.backgroundColor = "#1A4D2E";
					inputNombre.value = "";
					inputEmail.value = "";
					inputMensaje.value = "";
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<div className="form-contact">
			<form ref={form} onSubmit={sendEmail}>
				<h1>Contactame</h1>
				<label>Nombre</label>
				<input type="text" name="user_name" placeholder="Nombre" id="name" />
				<label>Email</label>
				<input type="email" name="user_email" placeholder="Correo" id="email" />
				<label>
					Mensaje
					<textarea
						name="message"
						placeholder="Escriba aquí su mensaje"
						id="mensaje"
					/>
				</label>
				<input
					type="submit"
					value="Enviar"
					id="input-enviado"
					className="boton-form"
				/>
			</form>
		</div>
	);
};
export default Contact;
