import { useState } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { selectConversion } from "../features/converter/converterSlice";
import { 
    changeBaseCurrency,
    changeConvCurrency,
    changeBaseAmount,
    swapCurrencies 
    } from '../features/converter/converterSlice'

const Converter = () => {

    const [baseCurrencyAmount, setBaseCurrencyAmount] = useState(0);
    const [convertedCurrencyAmount, setConvertedCurrencyAmount] = useState(0);
    const [baseCurrency, setBaseCurrency] = useState('');
    const [convertedCurrency, setConvertedCurrency] = useState('');

    const handleBaseChange = (e) => {
        setBaseCurrencyAmount(e.target.value)
        dispatch(changeBaseCurrency(e.target.value))
    }

    const handleBaseCurrencyChange = (e) => {
        setBaseCurrency(e.target.value)
        console.log(e.target.value)
    }

    const handleConvCurrencyChange = (e) => {
        setConvertedCurrency(e.target.value)
        console.log(e.target.value)
    }
    const dispatch = useDispatch();
    const fromRedux = useSelector(selectConversion);

    const test = {
        "success": true,
        "timestamp": 1519296206,
        "base": "EUR",
        "date": "2022-07-25",
        "rates": {
            "AUD": 1.566015,
            "CAD": 1.560132,
            "CHF": 1.154727,
            "CNY": 7.827874,
            "GBP": 0.882047,
            "JPY": 132.360679,
            "USD": 1.23396,
        }
    }

    const currencies = Object.keys(test.rates);

    return(
        <div className="converter-container">
            <form>
                <label className='baseLabel' htmlFor="baseCurrency">Convert:</label>
                <input
                    type="text"
                    id="baseCurrency"
                    name="baseCurrency"
                    value={fromRedux.baseAmount}
                    onChange={handleBaseChange}
                /> &emsp;
                <select 
                    className="baseCurrenciesSelector"
                    onChange={handleBaseCurrencyChange}
                    value={fromRedux.baseCurrency}    
                >
                    {
                        currencies.map((coinName) => <option key={coinName}>{coinName}</option>)
                    }
                </select>
                <label className='convertedLabel' htmlFor="convertedCurrency">to:</label>
                <input
                    id="convertedCurrency"
                    name="convertedCurrency"
                    value={convertedCurrencyAmount}
                    readOnly
                /> &emsp;
                <select 
                    className="convertedCurrencySelector" 
                    onChange={handleConvCurrencyChange}
                    value={fromRedux.convCurrency}
                >
                    {
                        currencies.map((coinName) => <option key={coinName}>{coinName}</option>)
                    }
                </select>
            </form>
        </div>
    )
}

export default Converter;