<div class="inner_angu">
    <div class="series_head">
        <div class="mandatory">All fields are mandatory.</div>
        <h4>BMW model selected for Test Drive.</h4>
        <p>BMW 3 Series</p>
    </div>
    <form action="http://campaings.bmwindia.co.in/lms" method="post" id="form">
        <input type="hidden" name="campaing_id" value="6" />
        <input type="hidden" name="bmw_seriesid" id="bmw_seriesid" value="2" />
        <input type="hidden" name="bmw_currentcarowned" id="bmw_currentcarowned" />
        <div class="main_form_outer">
            <h4>FILL IN YOUR DETAILS AND EXPERIENCE THE JOY OF DRIVING A BMW AT THE EARLIEST. </h4>
            <div class="col-md-2 form_padd_fir">
                <select class="form-control select_option" required>
                    <option value="" selected >Title* </option>
                    <option value="2CE544DC-B748-E111-B8E1-005056820025">Dr.</option>
                    <option value="2EE544DC-B748-E111-B8E1-005056820025">Mr.</option>
                    <option value="30E544DC-B748-E111-B8E1-005056820025">Mrs.</option>
                    <option value="32E544DC-B748-E111-B8E1-005056820025">Ms.</option>
                </select>
            </div>
            <div class="col-md-4 form_padd_cen">
                <input type="text" class="form-control textonly" name="bmw_firstname" placeholder="First Name" required>
            </div>
            <div class="col-md-6 form_padd_last">
                <input type="text" class="form-control textonly" name="bmw_lastname" placeholder="Last Name" required>
            </div>
            <div class="col-md-6 form_padd_fir">
                <input type="text" class="form-control digitonly" name="bmw_mobile1" id="bmw_mobile1" placeholder="Mobile No." required  maxlength="10">
            </div>
            <div class="col-md-6 form_padd_last">
                <input type="text" class="form-control" name="bmw_email" placeholder="Email ID" required>
            </div>
            <div class="col-md-6 form_padd_fir">
                <select class="drilldown-1 form-control select_option" name="brand" id="brand" required>
                    <option value=""> Existing Car Brand* </option>
                    <option value="Aston Martin">Aston Martin</option>
                    <option value="Audi">Audi</option>
                    <option value="Bugatti">Bugatti</option>
                    <option value="Bentley">Bentley</option>
                    <option value="BMW">BMW </option>
                    <option value="Chevrolet">Chevrolet</option>
                    <option value="Ferrari">Ferrari</option>
                    <option value="Ford">Ford</option>
                    <option value="Force Motors">Force Motors</option>
                    <option value="Fiat">Fiat </option>
                    <option value="Honda">Honda </option>
                    <option value="Hyundai">Hyundai </option>
                    <option value="Jaguar">Jaguar </option>
                    <option value="Jeep">Jeep </option>
                    <option value="Lamborghini">Lamborghini </option>
                    <option value="Land Rover">Land Rover </option>
                    <option value="Lexus">Lexus </option>
                    <option value="Mahindra">Mahindra </option>
                    <option value="Maruti Suzuki">Maruti Suzuki</option>
                    <option value="Masareti">Masareti</option>
                    <option value="Mercedez Benz">Mercedez Benz </option>
                    <option value="Mitsubishi">Mitsubishi </option>
                    <option value="Nissan">Nissan</option>
                    <option value="Porche">Porche </option>
                    <option value="Rolls Royce">Rolls Royce</option>
                    <option value="Skoda">Skoda</option>
                    <option value="Ssangyong">Ssangyong</option>
                    <option value="Tata">Tata </option>
                    <option value="Toyota">Toyota</option>
                    <option value="Volkswagen">Volkswagen</option>
                    <option value="Volvo">Volvo</option>
                </select>
            </div>
            <div class="col-md-6 form_padd_last">
                <select class="drilldown-1 form-control select_option" name="model" id="model" required>
                    <option value="" selected >Existing Car Model*</option>
                </select>
            </div>
            <div class="col-md-6 form_padd_fir">
                <select class="form-control" name="purchase" id="purchase" required>
                    <option value="" selected >Year of Purchase*</option>
                    <option value="1985">1985</option>
                    <option value="1986">1986</option>
                    <option value="1987">1987</option>
                    <option value="1988">1988</option>
                    <option value="1989">1989</option>
                    <option value="1990">1990</option>
                    <option value="1991">1991</option>
                    <option value="1992">1992</option>
                    <option value="1993">1993</option>
                    <option value="1994">1994</option>
                    <option value="1995">1995</option>
                    <option value="1996">1996</option>
                    <option value="1997">1997</option>
                    <option value="1998">1998</option>
                    <option value="1999">1999</option>
                    <option value="2000">2000</option>
                    <option value="2001">2001</option>
                    <option value="2002">2002</option>
                    <option value="2003">2003</option>
                    <option value="2004">2004</option>
                    <option value="2005">2005</option>
                    <option value="2006">2006</option>
                    <option value="2007">2007</option>
                    <option value="2008">2008</option>
                    <option value="2009">2009</option>
                    <option value="2010">2010</option>
                    <option value="2011">2011</option>
                    <option value="2012">2012</option>
                    <option value="2013">2013</option>
                    <option value="2014">2014</option>
                </select>
            </div>
            <div class="col-md-6 form_padd_last">
                <select class="form-control select_option" name="Intention" required>
                    <option value="174640003" disabled selected>Purchase Intention*</option>
                    <option value="174640004">Within 1 month</option>
                    <option value="174640000">Within 3 months</option>
                    <option value="174640001">3-6 months</option>
                    <option value="174640002">6-12 months</option>
                    <option value="174640003">Later than 1 year</option>
                </select>
            </div>
            <div class="col-md-12 form_padd_last">
                <input type="checkbox" class="check_box" required>
                Accept the data usage agreement.  <a href="#" data-toggle="modal" data-target="#basicModal">Terms of use.</a></div>
            <input class="submit" type="submit"  value="Submit" />
            <div class="clearfix"></div>
            <div class="foo_model">The model, equipment and possible vehicle configurations illustrated in this communication may differ from the vehicles supplied in the Indian market.</div>
        </div>
    </form>
</div>