import { useState } from 'react';

function PromoCodeForm() {
  const [promoCode, setPromoCode] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    if (promoCode === 'your-valid-promo-code') {
      setSuccess('Промокод принят!');
      setError('');

    } else {
      setError('Промокод неверный');
      setSuccess('');
    }
  };

  return (
    <div className="basket-form">
      <form action="#" onSubmit={handleSubmit}>
        <div className="custom-input">
          <label>
            <span className="custom-input__label">Промокод</span>
            <input
              type="text"
              name="promo"
              placeholder="Введите промокод"
              value={promoCode}
              onChange={(event) => setPromoCode(event.target.value)}
            />
          </label>
          {error && <p className="custom-input__error">{error}</p>}
          {success && <p className="custom-input__success">{success}</p>}
        </div>
        <button className="btn" type="submit">
          Применить
        </button>
      </form>
    </div>
  );
}

export default PromoCodeForm;
