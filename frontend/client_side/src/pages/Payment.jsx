import React from 'react';
import "../App.css";

function Payment() {
  return (
    <div className="container ">
      <div className="card">
        <div className="card-header text-center">
          <h2 className='title1'>Payment Form</h2>
        </div>
        <div className="card-body">
          <form>
            {/* Payment Method */}
            <div className="mb-3">
              <label htmlFor="paymentMethod" className="form-label">Payment Method</label>
              <select className="form-select" id="paymentMethod" required>
                <option value="" disabled selected>Select Payment Method</option>
                <option value="Credit Card">Credit Card</option>
                <option value="Debit Card">Debit Card</option>
                <option value="PayPal">PayPal</option>
                <option value="Net Banking">Net Banking</option>
              </select>
            </div>

            {/* Amount */}
            <div className="mb-3">
              <label htmlFor="amount" className="form-label">Amount</label>
              <input type="number" className="form-control" id="amount" placeholder="Enter Amount" required />
            </div>

            {/* Payment Date */}
            <div className="mb-3">
              <label htmlFor="paymentDate" className="form-label">Payment Date</label>
              <input type="date" className="form-control" id="paymentDate" required />
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary w-100">Submit Payment</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Payment;
