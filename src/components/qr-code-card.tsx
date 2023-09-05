import styles from './qr-code-card.module.css'
import qrCode from '../assets/images/image-qr-code.png'

export default function QrCodeCard() {
  return (
    <>
      <section className={styles['card']}>
        <article className={styles["card__item"]}>
          <div className={styles['card_content']}>
            <figure className={styles['card__picture']}>
              <img src={qrCode} alt="fontend mentor qr code" className={styles['card__img']} />
            </figure>
            <h2 className={styles['card__title']}>
              Improve your front-end skills by building projects
            </h2>
            <p className={styles['card__paragraph']}>
              Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
            </p>
          </div>

        </article>
      </section>
      <footer className={styles["attribution"]}>
        <span>
          Coded by <a href="#"> OcroDev</a>.
        </span>
      </footer>
    </>
  )
}
