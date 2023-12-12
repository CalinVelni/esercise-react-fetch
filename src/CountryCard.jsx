export default ({ countryName, flagUrl, population, capital }) => {
  return (
    <section>
      <figure>
        <h3>{countryName}</h3>
        <img src={flagUrl} alt={countryName} />
        <p>
          {" "}
          <span>Population :</span> {population}
        </p>
        <p>
          {" "}
          <span> Capital{(capital && capital.length) > 1 ? 's' : ''} :</span> 
          {capital ? capital.map((cap, i )=> i === 0 ? ` ${cap}` : `, ${cap}`) : " Non-Existent"}
        </p>
      </figure>
    </section>
  );
};
