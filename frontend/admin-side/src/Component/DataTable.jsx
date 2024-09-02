import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function DataTable() {
  return (
    <div>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Data Tables</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">Tables</li>
              <li className="breadcrumb-item active">Data</li>
            </ol>
          </nav>
        </div>
        {/* End Page Title */}

        <section className="section">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Datatables</h5>
                  <p>
                    Add lightweight datatables to your project with using the{" "}
                    <a
                      href="https://github.com/fiduswriter/Simple-DataTables"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Simple DataTables
                    </a>{" "}
                    library. Just add <code>.datatable</code> className name to
                    any table you wish to conver to a datatable. Check for{" "}
                    <a
                      href="https://fiduswriter.github.io/simple-datatables/demos/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      more examples
                    </a>
                    .
                  </p>

                  {/* Table with stripped rows */}
                  <table className="table datatable">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Ext.</th>
                        <th>City</th>
                        <th data-type="date" data-format="YYYY/DD/MM">
                          Start Date
                        </th>
                        <th>Completion</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Theodore Duran</td>
                        <td>8971</td>
                        <td>Dhanbad</td>
                        <td>1999/04/07</td>
                        <td>97%</td>
                        <td>
                          <button className="edit-btn">Edit</button>
                          <button className="delete-btn">Delete</button>
                        </td>
                      </tr>
                      <tr>
                        <td>Kylie Bishop</td>
                        <td>3147</td>
                        <td>Norman</td>
                        <td>2005/09/08</td>
                        <td>63%</td>
                        <td>
                          <button className="edit-btn">Edit</button>
                          <button className="delete-btn">Delete</button>
                        </td>
                      </tr>
                      <tr>
                    <td>Cairo Rice</td>
                    <td>6273</td>
                    <td>Ostra Vetere</td>
                    <td>2016/27/02</td>
                    <td>13%</td>
                    <td>
                          <button className="edit-btn">Edit</button>
                          <button className="delete-btn">Delete</button>
                        </td>
                  </tr>
                  <tr>
                    <td>Sylvia Peters</td>
                    <td>6829</td>
                    <td>Arrah</td>
                    <td>2015/03/02</td>
                    <td>13%</td>
                    <td>
                          <button className="edit-btn">Edit</button>
                          <button className="delete-btn">Delete</button>
                        </td>
                  </tr>
                  <tr>
                    <td>Kasper Craig</td>
                    <td>5515</td>
                    <td>Firenze</td>
                    <td>2015/26/04</td>
                    <td>56%</td>
                    <td>
                          <button className="edit-btn">Edit</button>
                          <button className="delete-btn">Delete</button>
                        </td>
                  </tr>
                  <tr>
                    <td>Leigh Ruiz</td>
                    <td>5112</td>
                    <td>Lac Ste. Anne</td>
                    <td>2001/09/02</td>
                    <td>28%</td>
                    <td>
                          <button className="edit-btn">Edit</button>
                          <button className="delete-btn">Delete</button>
                        </td>
                  </tr>
                  <tr>
                    <td>Athena Aguirre</td>
                    <td>5741</td>
                    <td>Romeral</td>
                    <td>2010/24/03</td>
                    <td>15%</td>
                    <td>
                          <button className="edit-btn">Edit</button>
                          <button className="delete-btn">Delete</button>
                        </td>
                  </tr>
                  <tr>
                    <td>Riley Nunez</td>
                    <td>5533</td>
                    <td>Sart-Eustache</td>
                    <td>2003/26/02</td>
                    <td>30%</td>
                    <td>
                          <button className="edit-btn">Edit</button>
                          <button className="delete-btn">Delete</button>
                        </td>
                  </tr>
                  <tr>
                    <td>Lois Talley</td>
                    <td>9393</td>
                    <td>Dorchester</td>
                    <td>2014/05/01</td>
                    <td>51%</td>
                    <td>
                          <button className="edit-btn">Edit</button>
                          <button className="delete-btn">Delete</button>
                        </td>
                  </tr>
                  <tr>
                    <td>Hop Bass</td>
                    <td>1024</td>
                    <td>Westerlo</td>
                    <td>2012/25/09</td>
                    <td>85%</td>
                    <td>
                          <button className="edit-btn">Edit</button>
                          <button className="delete-btn">Delete</button>
                        </td>
                  </tr>
                  <tr>
                    <td>Kalia Diaz</td>
                    <td>9184</td>
                    <td>Ichalkaranji</td>
                    <td>2013/26/06</td>
                    <td>92%</td>
                    <td>
                          <button className="edit-btn">Edit</button>
                          <button className="delete-btn">Delete</button>
                        </td>
                  </tr>
                  <tr>
                    <td>Maia Pate</td>
                    <td>6682</td>
                    <td>Louvain-la-Neuve</td>
                    <td>2011/23/04</td>
                    <td>50%</td>
                    <td>
                          <button className="edit-btn">Edit</button>
                          <button className="delete-btn">Delete</button>
                        </td>
                  </tr>
                      {/* Add more rows as needed */}
                    </tbody>
                  </table>
                  {/* End Table with stripped rows */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default DataTable;
