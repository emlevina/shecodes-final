import styles from '../styles/BarCard.module.css'

const BarCard = ({ title, priceYesterday = 5, priceToday = 6 , linkToImg}) => {
    const diff = (priceToday - priceYesterday).toFixed(2)
    const growth = ((diff / priceYesterday) * 100).toFixed(2)

    return (
        <div className={styles.card}>
            <div className={[styles.row, styles['row-between']].join(" ")}>
                {linkToImg && <img src={linkToImg} alt="logo" width='15px' />}
                <div>{title}/USD</div>
                <div><span>{priceYesterday.toFixed(2)}</span></div>
            </div>
            <div className={[styles.row, styles['row-start']].join(" ")}>
                <div>{growth >= 0 ? '↑' : '↓'}</div>
                <div><span className={[styles.big, growth >= 0 ? styles.green : styles.red].join(" ")}>{growth}%</span></div>
                <div><span>{diff}</span></div>
            </div>
        </div>
    );
}

export default BarCard;