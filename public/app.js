document.getElementById('paymentForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const amount = document.getElementById('amount').value;

  try {
    const response = await fetch('/api/payments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userEmail: email, amount }),
    });

    const result = await response.json();
    document.getElementById('response').innerText = response.ok
      ? 'Payment successful!'
      : `Error: ${result.message}`;
  } catch (error) {
    document.getElementById('response').innerText = 'Error: Unable to process payment.';
  }
});