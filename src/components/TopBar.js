import BarCard from './BarCard';
import styles from '../styles/TopBar.module.css'
import { useState, useEffect } from 'react';
import { linksToIcons as links } from '../data/linksToIcons'
import { currencyAPIFetch } from '../services/api/currencyAPI/fetch';

const TopBar = () => {
  const [rates, setRates] = useState({})
  const [isDataLoaded, setIsDataLoaded] = useState(false)

  const symbols = ['EUR','GBP','BTC','XAU','XAG']

  useEffect(() => {
    currencyAPIFetch(setRates, setIsDataLoaded)
  }, [])

  return (
    <div className={styles.group}>
      { isDataLoaded  && symbols.map(rate => {
        return <BarCard linkToImg={links[rate]} key={rate} title={rate} priceYesterday={1 / rates["rates"][rates["start_date"]][rate]} priceToday={1 / rates["rates"][rates["end_date"]][rate]} />
      })}
    </div>
  );
}

export default TopBar;