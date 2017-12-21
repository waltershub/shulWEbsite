import React from 'react';

const Donate = () => (
  <div className="donate pulse">
    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
      <input type="hidden" name="cmd" value="_s-xclick" />
      <input type="hidden" name="hosted_button_id" value="EHJHCEA69DZNJ" />
      <input type="image" className="donateImg" src="/assets/images/slideshow/donate.png" name="submit" alt="PayPal - The safer, easier way to pay online!" />
    </form>
  </div>
);

export default Donate;
