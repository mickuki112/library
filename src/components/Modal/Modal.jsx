import React from 'react'
import styles from './Modal.module.css'

const Modal = ({ hidden, close, children }) => (
	<>
		<div className={hidden ? styles.backgroundHidden : styles.background} onClick={close} />
		<div
			className={styles.modal}
			style={{
				transform: !hidden ? 'translateY(0vh)' : 'translateY(-100vh)',
				opacity: !hidden ? '1' : '0',
			}}
		>
			{children}
		</div>
	</>
)

export default Modal
