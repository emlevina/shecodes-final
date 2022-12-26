import styles from '../styles/BarCard.module.css'

const BarCard = ({ title, priceYesterday = 5, priceToday = 6 , linkToImg}) => {
    const diff = (priceToday - priceYesterday).toFixed(2)
    const growth = ((diff / priceYesterday) * 100).toFixed(2)

    return (
        <div className={styles.card}>
            <div className={[styles.row, styles['row-between']].join(" ")}>
                <div className={styles.title}>
                    {linkToImg && <img src={linkToImg} alt="" width='15px' />}
                    <span>{title}/USD</span>
                </div>
                <div><span>{priceYesterday.toFixed(2)}</span></div>
            </div>
            <div className={[styles.row, styles['row-start']].join(" ")}>
                <div><span className={growth >= 0 ? styles.green : styles.red}>{growth >= 0 ? '↑' : '↓'}<span className={styles.big}>{growth}%</span></span></div>
                <div><span>{diff}</span></div>
            </div>
        </div>
    );
}

export default BarCard;