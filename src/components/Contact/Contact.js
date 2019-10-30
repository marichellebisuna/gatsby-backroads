import React from 'react';
import Title from '../Title';
import styles from '../../components/css/contact.module.css';

const Contact = () => {
	return (
		<section className={styles.contact}>
			<Title title="contact" subtitle="us" />
			<div className={styles.center}>
				<form className={styles.form} action="https://formspree.io/marichellebisuna@yahoo.com" method="POST">
					<div>
						<label htmlFor="name">name</label>
						<input
							type="text"
							name="name"
							id="name"
							className={styles.formControl}
							placeholder="jane doe"
						/>
					</div>
					<div>
						<label htmlFor="name">email</label>
						<input
							type="email"
							name="email"
							id="email"
							className={styles.formControl}
							placeholder="email@email.com"
						/>
					</div>
					<div>
						<label htmlFor="name">message</label>
						<textarea
							name="message"
							id="message"
							rows="10"
							className={styles.formControl}
							placeholder="hello there!"
						/>
					</div>
					<div>
						<input type="submit" value="submit" className={styles.submit} />
					</div>
				</form>
			</div>
		</section>
	);
};

export default Contact;
