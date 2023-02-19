import React, { useState, useEffect } from 'react'
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
}
    from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';

const Editprofile = () => {
    const [fatherName, setfatherName] = useState("");
    const [motherName, setmotherName] = useState("");
    const [gender, setgender] = useState("");
    const [dob, setdob] = useState("");
    const [enrollNum, setenrollNum] = useState("");
    const [mobNum, setmobNum] = useState("");
    const [alternateNum, setalternateNum] = useState("");
    const [disability, setDisability] = useState("");
    const [aadharNum, setaadharNum] = useState("");
    const [bloodGroup, setbloodGroup] = useState("");
    const [caste, setcaste] = useState("");
    const [religion, setreligion] = useState("");
    const [nationality, setnationality] = useState("");
    const [state, setstate] = useState("");
    const navigate = useNavigate;
    const firstN = JSON.parse(localStorage.getItem("student")).firstName;
    const middleN = JSON.parse(localStorage.getItem("student")).middleName;
    const lastN = JSON.parse(localStorage.getItem("student")).lastName;
    const idd = JSON.parse(localStorage.getItem("student"))._id;
    useEffect(() => {
        getProductDetails();
    }, [])

    const setEmpty = () => {
        setfatherName("");
        setmotherName("");
        setDisability("");
        setaadharNum("");
        setalternateNum("");
        setmobNum("");
        setenrollNum("");
        setbloodGroup("");
        setcaste("");
        setdob("");
        setgender("");
        setnationality("");
        setreligion("");
        setstate("");
    }
    const getProductDetails = async () => {
        let result = await fetch(`http://localhost:5000/add-data/${idd}`);
        result = await result.json();
        if (result.result == "No User Found") {
            setEmpty();
        }
        else {
            setfatherName(result.stdprofile.fatherName);
            setmotherName(result.stdprofile.motherName);
            setDisability(result.stdprofile.disability);
            setaadharNum(result.stdprofile.aadharNum);
            setalternateNum(result.stdprofile.alternateNum);
            setmobNum(result.stdprofile.mobNum);
            setenrollNum(result.stdprofile.enrollNum);
            setbloodGroup(result.stdprofile.bloodGroup);
            setcaste(result.stdprofile.caste);
            setdob(result.stdprofile.dob);
            setgender(result.stdprofile.gender);
            setnationality(result.stdprofile.nationality);
            setreligion(result.stdprofile.religion);
            setstate(result.stdprofile.state);
        }
    }

    // const update_profile = async () => {
    //     const studentId = JSON.parse(localStorage.getItem("student"))._id;
    //     let result = await fetch(`http://localhost:5000/add-student-prof/${idd}`, {
    //         method: 'put',
    //         body: JSON.stringify({
    //             fatherName, motherName, gender, dob, enrollNum, mobNum, alternateNum, disability, aadharNum
    //             , bloodGroup, caste, religion, nationality, state, studentId
    //         }),
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     });
    //     result = await result.json();
    //     if (result) {
    //         navigate('/stdprofile')
    //     }
    // }

    const add_student_profile = async () => {
        const studentId = JSON.parse(localStorage.getItem("student"))._id;
        const stdprofile = JSON.parse(localStorage.getItem("stdprofile"));
        let result = await fetch("http://localhost:5000/add-data", {
            method: 'post',
            body: JSON.stringify({
                studentId, stdprofile
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
    }

    const set_student_profile = async () => {
        const profi = JSON.stringify({
            fatherName, motherName, gender, dob, enrollNum, mobNum, alternateNum, disability, aadharNum
            , bloodGroup, caste, religion, nationality, state
        });
        localStorage.setItem("stdprofile", profi);
    }
    const save_update = () => {
        if (localStorage.getItem("profile")) {
            const auth = JSON.parse(localStorage.getItem("profile"))._id;
            const authh = JSON.parse(localStorage.getItem("profile")).result;
            if (auth) {
                return <Link to='/student/stdprofile'><MDBBtn type='submit'>Update</MDBBtn></Link>
            }
            else if (authh) {
                return <MDBRow>
                    <MDBCol><MDBBtn type='submit' onClick={() => set_student_profile()}>Save</MDBBtn></MDBCol>
                    <MDBCol><MDBBtn type='submit' onClick={() => add_student_profile()}>Submit</MDBBtn></MDBCol>
                </MDBRow>

            }
        }
        else {
            return <MDBRow>
                <MDBCol><MDBBtn type='submit' onClick={() => set_student_profile()}>Save</MDBBtn></MDBCol>
                <MDBCol><MDBBtn type='submit' onClick={() => add_student_profile()}>Submit</MDBBtn></MDBCol>
            </MDBRow>

        }
    }

    return (
        <MDBContainer fluid>
            <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
                <MDBCardBody>
                    <MDBRow>
                        <MDBCol>Edit Profile</MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow style={{ height: "20px" }}></MDBRow>
                    <form>
                        <MDBRow>
                            <MDBCol><label>First Name: </label><MDBInput id='firstname' required type='text' value={firstN} disabled></MDBInput></MDBCol>
                            <MDBCol><label>Middle Name: </label><MDBInput id='middlename' value={middleN} type='text' disabled></MDBInput></MDBCol>
                            <MDBCol><label>Last Name: </label><MDBInput id='lastname' value={lastN} required type='text' disabled></MDBInput></MDBCol>
                        </MDBRow>

                        <MDBRow style={{ height: "20px" }}></MDBRow>
                        <MDBRow>
                            <MDBCol><label>Father's Name: </label>
                                <MDBInput id='fname' type='text' value={fatherName}
                                    onChange={(e) => setfatherName(e.target.value)} required></MDBInput>
                            </MDBCol>
                            <MDBCol><label>Mother's Name: </label>
                                <MDBInput id='mname' type='text' value={motherName}
                                    onChange={(e) => setmotherName(e.target.value)} required></MDBInput>
                            </MDBCol>
                            <MDBCol><label>Blood Group: </label>
                                <MDBInput id='enumber' type='text' value={bloodGroup}
                                    onChange={(e) => setbloodGroup(e.target.value)} required></MDBInput>
                            </MDBCol>
                        </MDBRow>

                        <MDBRow style={{ height: "20px" }}></MDBRow>
                        <MDBRow>
                            <MDBCol><label>Date</label>
                                <MDBInput id='dob' type='date' value={dob}
                                    onChange={(e) => setdob(e.target.value)} required></MDBInput>
                            </MDBCol>
                            <MDBCol><label>Enrollment</label>
                                <MDBInput id='enumber' type='text' value={enrollNum}
                                    onChange={(e) => setenrollNum(e.target.value)} required></MDBInput>
                            </MDBCol>
                            <MDBCol><label>Mobile Number</label>
                                <MDBInput id='mnumber' type='tel' value={mobNum}
                                    onChange={(e) => setmobNum(e.target.value)} required></MDBInput>
                            </MDBCol>
                            <MDBCol><label>Altenate Number</label>
                                <MDBInput id='mnumber' type='tel' value={alternateNum}
                                    onChange={(e) => setalternateNum(e.target.value)}></MDBInput>
                            </MDBCol>
                        </MDBRow>

                        <MDBRow style={{ height: "20px" }}></MDBRow>
                        <MDBRow>
                            <MDBCol>
                                <label className="required" htmlFor="disability">Disability: </label>
                                <select className="form-control select2" name="disability" id="disability" required="" aria-hidden="true"
                                    value={disability}
                                    onChange={(e) => setDisability(e.target.value)}>
                                    <option value="">Please select</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </MDBCol>
                            <MDBCol><label>Religion: </label>
                                <select className="form-control select2" name="religion" id="religion" required="" aria-hidden="true" value={religion}
                                    onChange={(e) => setreligion(e.target.value)}>
                                    <option value="">Please select</option>
                                    <option value="Hindu">Hindu</option>
                                    <option value="Muslim">Muslim</option>
                                    <option value="Christian">Christian</option>
                                    <option value="Sikh">Sikh</option>
                                    <option value="Budhist">Budhist</option>
                                    <option value="other2">other</option>
                                </select>
                            </MDBCol>
                            <MDBCol><label>Caste: </label>
                                <select className="form-control select2" name="caste" id="caste" required="" aria-hidden="true" value={caste}
                                    onChange={(e) => setcaste(e.target.value)}>
                                    <option value="">Please select</option>
                                    <option value="GEN">GEN</option>
                                    <option value="SC">SC</option>
                                    <option value="ST">ST</option>
                                    <option value="GEN-EWS">GEN-EWS</option>
                                    <option value="OBC">OBC</option>
                                    <option value="other">other</option>
                                </select></MDBCol>
                        </MDBRow>

                        <MDBRow style={{ height: "20px" }}></MDBRow>

                        <MDBRow>
                            <MDBCol><label>Addhaar No.: </label>
                                <MDBInput id='mnumber' type='tel' value={aadharNum}
                                    onChange={(e) => setaadharNum(e.target.value)} required></MDBInput>
                            </MDBCol>
                            <MDBCol>
                                <label className="required" htmlFor="country_id">Nationality: </label>
                                <select className="form-control select2" name="country_id" id="country_id" required="" aria-hidden="true" value={nationality}
                                    onChange={(e) => setnationality(e.target.value)}>
                                    <option value="">Please select</option>
                                    <option value="1">Afghanistan</option>
                                    <option value="2">Albania</option>
                                    <option value="3">Algeria</option>
                                    <option value="4">American Samoa</option>
                                    <option value="5">Andorra</option>
                                    <option value="6">Angola</option>
                                    <option value="7">Anguilla</option>
                                    <option value="8">Antarctica</option>
                                    <option value="9">Antigua And Barbuda</option>
                                    <option value="10">Argentina</option>
                                    <option value="11">Armenia</option>
                                    <option value="12">Aruba</option>
                                    <option value="13">Australia</option>
                                    <option value="14">Austria</option>
                                    <option value="15">Azerbaijan</option>
                                    <option value="16">Bahamas The</option>
                                    <option value="17">Bahrain</option>
                                    <option value="18">Bangladesh</option>
                                    <option value="19">Barbados</option>
                                    <option value="20">Belarus</option>
                                    <option value="21">Belgium</option>
                                    <option value="22">Belize</option>
                                    <option value="23">Benin</option>
                                    <option value="24">Bermuda</option>
                                    <option value="25">Bhutan</option>
                                    <option value="26">Bolivia</option>
                                    <option value="27">Bosnia and Herzegovina</option>
                                    <option value="28">Botswana</option>
                                    <option value="29">Bouvet Island</option>
                                    <option value="30">Brazil</option>
                                    <option value="31">British Indian Ocean Territory</option>
                                    <option value="32">Brunei</option>
                                    <option value="33">Bulgaria</option>
                                    <option value="34">Burkina Faso</option>
                                    <option value="35">Burundi</option>
                                    <option value="36">Cambodia</option>
                                    <option value="37">Cameroon</option>
                                    <option value="38">Canada</option>
                                    <option value="39">Cape Verde</option>
                                    <option value="40">Cayman Islands</option>
                                    <option value="41">Central African Republic</option>
                                    <option value="42">Chad</option>
                                    <option value="43">Chile</option>
                                    <option value="44">China</option>
                                    <option value="45">Christmas Island</option>
                                    <option value="46">Cocos (Keeling) Islands</option>
                                    <option value="47">Colombia</option>
                                    <option value="48">Comoros</option>
                                    <option value="49">Congo</option>
                                    <option value="50">Congo The Democratic Republic Of The</option>
                                    <option value="51">Cook Islands</option>
                                    <option value="52">Costa Rica</option>
                                    <option value="53">Cote D Ivoire (Ivory Coast)</option>
                                    <option value="54">Croatia (Hrvatska)</option>
                                    <option value="55">Cuba</option>
                                    <option value="56">Cyprus</option>
                                    <option value="57">Czech Republic</option>
                                    <option value="58">Denmark</option>
                                    <option value="59">Djibouti</option>
                                    <option value="60">Dominica</option>
                                    <option value="61">Dominican Republic</option>
                                    <option value="62">East Timor</option>
                                    <option value="63">Ecuador</option>
                                    <option value="64">Egypt</option>
                                    <option value="65">El Salvador</option>
                                    <option value="66">Equatorial Guinea</option>
                                    <option value="67">Eritrea</option>
                                    <option value="68">Estonia</option>
                                    <option value="69">Ethiopia</option>
                                    <option value="70">External Territories of Australia</option>
                                    <option value="71">Falkland Islands</option>
                                    <option value="72">Faroe Islands</option>
                                    <option value="73">Fiji Islands</option>
                                    <option value="74">Finland</option>
                                    <option value="75">France</option>
                                    <option value="76">French Guiana</option>
                                    <option value="77">French Polynesia</option>
                                    <option value="78">French Southern Territories</option>
                                    <option value="79">Gabon</option>
                                    <option value="80">Gambia The</option>
                                    <option value="81">Georgia</option>
                                    <option value="82">Germany</option>
                                    <option value="83">Ghana</option>
                                    <option value="84">Gibraltar</option>
                                    <option value="85">Greece</option>
                                    <option value="86">Greenland</option>
                                    <option value="87">Grenada</option>
                                    <option value="88">Guadeloupe</option>
                                    <option value="89">Guam</option>
                                    <option value="90">Guatemala</option>
                                    <option value="91">Guernsey and Alderney</option>
                                    <option value="92">Guinea</option>
                                    <option value="93">Guinea-Bissau</option>
                                    <option value="94">Guyana</option>
                                    <option value="95">Haiti</option>
                                    <option value="96">Heard and McDonald Islands</option>
                                    <option value="97">Honduras</option>
                                    <option value="98">Hong Kong S.A.R.</option>
                                    <option value="99">Hungary</option>
                                    <option value="100">Iceland</option>
                                    <option value="101">India</option>
                                    <option value="102">Indonesia</option>
                                    <option value="103">Iran</option>
                                    <option value="104">Iraq</option>
                                    <option value="105">Ireland</option>
                                    <option value="106">Israel</option>
                                    <option value="107">Italy</option>
                                    <option value="108">Jamaica</option>
                                    <option value="109">Japan</option>
                                    <option value="110">Jersey</option>
                                    <option value="111">Jordan</option>
                                    <option value="112">Kazakhstan</option>
                                    <option value="113">Kenya</option>
                                    <option value="114">Kiribati</option>
                                    <option value="115">Korea North</option>
                                    <option value="116">Korea South</option>
                                    <option value="117">Kuwait</option>
                                    <option value="118">Kyrgyzstan</option>
                                    <option value="119">Laos</option>
                                    <option value="120">Latvia</option>
                                    <option value="121">Lebanon</option>
                                    <option value="122">Lesotho</option>
                                    <option value="123">Liberia</option>
                                    <option value="124">Libya</option>
                                    <option value="125">Liechtenstein</option>
                                    <option value="126">Lithuania</option>
                                    <option value="127">Luxembourg</option>
                                    <option value="128">Macau S.A.R.</option>
                                    <option value="129">Macedonia</option>
                                    <option value="130">Madagascar</option>
                                    <option value="131">Malawi</option>
                                    <option value="132">Malaysia</option>
                                    <option value="133">Maldives</option>
                                    <option value="134">Mali</option>
                                    <option value="135">Malta</option>
                                    <option value="136">Man (Isle of)</option>
                                    <option value="137">Marshall Islands</option>
                                    <option value="138">Martinique</option>
                                    <option value="139">Mauritania</option>
                                    <option value="140">Mauritius</option>
                                    <option value="141">Mayotte</option>
                                    <option value="142">Mexico</option>
                                    <option value="143">Micronesia</option>
                                    <option value="144">Moldova</option>
                                    <option value="145">Monaco</option>
                                    <option value="146">Mongolia</option>
                                    <option value="147">Montserrat</option>
                                    <option value="148">Morocco</option>
                                    <option value="149">Mozambique</option>
                                    <option value="150">Myanmar</option>
                                    <option value="151">Namibia</option>
                                    <option value="152">Nauru</option>
                                    <option value="153">Nepal</option>
                                    <option value="154">Netherlands Antilles</option>
                                    <option value="155">Netherlands The</option>
                                    <option value="156">New Caledonia</option>
                                    <option value="157">New Zealand</option>
                                    <option value="158">Nicaragua</option>
                                    <option value="159">Niger</option>
                                    <option value="160">Nigeria</option>
                                    <option value="161">Niue</option>
                                    <option value="162">Norfolk Island</option>
                                    <option value="163">Northern Mariana Islands</option>
                                    <option value="164">Norway</option>
                                    <option value="165">Oman</option>
                                    <option value="166">Pakistan</option>
                                    <option value="167">Palau</option>
                                    <option value="168">Palestine</option>
                                    <option value="169">Panama</option>
                                    <option value="170">Papua new Guinea</option>
                                    <option value="171">Paraguay</option>
                                    <option value="172">Peru</option>
                                    <option value="173">Philippines</option>
                                    <option value="174">Pitcairn Island</option>
                                    <option value="175">Poland</option>
                                    <option value="176">Portugal</option>
                                    <option value="177">Puerto Rico</option>
                                    <option value="178">Qatar</option>
                                    <option value="179">Reunion</option>
                                    <option value="180">Romania</option>
                                    <option value="181">Russia</option>
                                    <option value="182">Rwanda</option>
                                    <option value="183">Saint Helena</option>
                                    <option value="184">Saint Kitts And Nevis</option>
                                    <option value="185">Saint Lucia</option>
                                    <option value="186">Saint Pierre and Miquelon</option>
                                    <option value="187">Saint Vincent And The Grenadines</option>
                                    <option value="188">Samoa</option>
                                    <option value="189">San Marino</option>
                                    <option value="190">Sao Tome and Principe</option>
                                    <option value="191">Saudi Arabia</option>
                                    <option value="192">Senegal</option>
                                    <option value="193">Serbia</option>
                                    <option value="194">Seychelles</option>
                                    <option value="195">Sierra Leone</option>
                                    <option value="196">Singapore</option>
                                    <option value="197">Slovakia</option>
                                    <option value="198">Slovenia</option>
                                    <option value="199">Smaller Territories of the UK</option>
                                    <option value="200">Solomon Islands</option>
                                    <option value="201">Somalia</option>
                                    <option value="202">South Africa</option>
                                    <option value="203">South Georgia</option>
                                    <option value="204">South Sudan</option>
                                    <option value="205">Spain</option>
                                    <option value="206">Sri Lanka</option>
                                    <option value="207">Sudan</option>
                                    <option value="208">Suriname</option>
                                    <option value="209">Svalbard And Jan Mayen Islands</option>
                                    <option value="210">Swaziland</option>
                                    <option value="211">Sweden</option>
                                    <option value="212">Switzerland</option>
                                    <option value="213">Syria</option>
                                    <option value="214">Taiwan</option>
                                    <option value="215">Tajikistan</option>
                                    <option value="216">Tanzania</option>
                                    <option value="217">Thailand</option>
                                    <option value="218">Togo</option>
                                    <option value="219">Tokelau</option>
                                    <option value="220">Tonga</option>
                                    <option value="221">Trinidad And Tobago</option>
                                    <option value="222">Tunisia</option>
                                    <option value="223">Turkey</option>
                                    <option value="224">Turkmenistan</option>
                                    <option value="225">Turks And Caicos Islands</option>
                                    <option value="226">Tuvalu</option>
                                    <option value="227">Uganda</option>
                                    <option value="228">Ukraine</option>
                                    <option value="229">United Arab Emirates</option>
                                    <option value="230">United Kingdom</option>
                                    <option value="231">United States</option>
                                    <option value="232">United States Minor Outlying Islands</option>
                                    <option value="233">Uruguay</option>
                                    <option value="234">Uzbekistan</option>
                                    <option value="235">Vanuatu</option>
                                    <option value="236">Vatican City State (Holy See)</option>
                                    <option value="237">Venezuela</option>
                                    <option value="238">Vietnam</option>
                                    <option value="239">Virgin Islands (British)</option>
                                    <option value="240">Virgin Islands (US)</option>
                                    <option value="241">Wallis And Futuna Islands</option>
                                    <option value="242">Western Sahara</option>
                                    <option value="243">Yemen</option>
                                    <option value="244">Yugoslavia</option>
                                    <option value="245">Zambia</option>
                                    <option value="246">Zimbabwe</option>
                                </select>
                            </MDBCol>
                            <MDBCol>
                                <label className="required" htmlFor="gender">Gender: </label>
                                <select className="form-control select2" name="gender" id="gender" required="" aria-hidden="true" value={gender}
                                    onChange={(e) => setgender(e.target.value)}>
                                    <option value="">Please select</option>
                                    <option value="Male">MALE</option>
                                    <option value="Female">FEMALE</option>
                                    <option value="Other">Other</option>
                                </select>
                            </MDBCol>
                        </MDBRow>

                        <MDBRow style={{ height: "20px" }}></MDBRow>
                        <MDBRow>
                            <MDBCol><label htmlFor="province_id">Domicile Province:</label>
                                <select className="form-control" name="province_id" id="province_id" value={state}
                                    onChange={(e) => setstate(e.target.value)}>
                                    <option value="">Please select</option>
                                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                    <option value="Assam">Assam</option>
                                    <option value="Bihar">Bihar</option>
                                    <option value="Chhattisgarh">Chhattisgarh</option>
                                    <option value="Goa">Goa</option>
                                    <option value="Gujarat">Gujarat</option>
                                    <option value="Haryana">Haryana</option>
                                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                                    <option value="Jharkhand">Jharkhand</option>
                                    <option value="Karnataka">Karnataka</option>
                                    <option value="Kerala">Kerala</option>
                                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                                    <option value="Maharashtra">Maharashtra</option>
                                    <option value="Manipur">Manipur</option>
                                    <option value="Meghalaya">Meghalaya</option>
                                    <option value="Mizoram">Mizoram</option>
                                    <option value="Nagaland">Nagaland</option>
                                    <option value="Odisha">Odisha</option>
                                    <option value="Punjab">Punjab</option>
                                    <option value="Rajasthan">Rajasthan</option>
                                    <option value="Sikkim">Sikkim</option>
                                    <option value="Tamil Nadu">Tamil Nadu</option>
                                    <option value="Telangana">Telangana</option>
                                    <option value="Tripura">Tripura</option>
                                    <option value="Uttar Pradesh" >Uttar Pradesh</option>
                                    <option value="Uttarakhand">Uttarakhand</option>
                                    <option value="West Bengal">West Bengal</option>
                                    <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                    <option value="Chandigarh">Chandigarh</option>
                                    <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
                                    <option value="Delhi">Delhi</option>
                                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                    <option value="Ladakh">Ladakh</option>
                                    <option value="Lakshadweep">Lakshadweep</option>
                                    <option value="Puducherry">Puducherry</option>
                                    <option value="Other">Other</option>
                                </select>
                            </MDBCol>
                            <MDBCol></MDBCol>
                        </MDBRow>

                        <MDBRow style={{ height: "20px" }}></MDBRow>
                        <MDBRow>
                            {save_update()}
                        </MDBRow>
                    </form>
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
    )
}

export default Editprofile
