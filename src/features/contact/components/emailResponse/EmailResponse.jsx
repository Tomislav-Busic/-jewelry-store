export const EmailResponse = ({ setEmailRes }) => {
  return (
    <div className={styles.response} data-testid="email-response">
      <h2>
        Poštovani, <br />
        Hvala vam na poruci.
        <br />
        Odgovorit ćemo vam u što kraćem roku.
        <br />
        Srdačan pozdrav
        <br />
        Calvi
      </h2>
      <button onClick={() => setEmailRes(false)}>U redu</button>
    </div>
  );
};
