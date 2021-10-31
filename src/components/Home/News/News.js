import React from 'react';

const News = () => {
    return (
        <div className="container py-5">
                <h1>Our News</h1>
  <div class="row row-cols-1 row-cols-md-2">
    <div class="col">
        <h5>GET THE NOTIFICATION</h5> <br />
        <h6>We have some <br />
Good news</h6> <br />
<p>Sign up for Medicare newsletter to receive all the new offers and discounts from Medicare clinic. Discounts are only valid four our newsletter subscribers.</p><br /><br />
<div className="py-3">
<form class="row g-3">
  <div class="col-auto">
    <label for="staticEmail2" class="visually-hidden">Email</label>
    <input type="email" class="form-control" id="staticEmail2" placeholder="Your email"/>
  </div>
  <div class="col-auto">
    <button type="submit" class="btn btn-primary mb-3">Suscribe Now</button>
  </div>
</form>
</div>
    </div>
    <div class="col">
      <img height="400px" src="https://i.ibb.co/FWFv4BS/tropical-vacation-air-travel-service-composition-98292-6990.jpg" alt="" />
      </div>
  </div>
        </div>
    );
};

export default News;