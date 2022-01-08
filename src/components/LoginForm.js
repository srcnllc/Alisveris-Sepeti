import React,{useState} from 'react'
import { Container, Row } from 'reactstrap'
import '../App.css';

function LoginForm({Login,error}) {
    const [details, setDetails] = useState({email:"",password:""});

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }

    return (
        <div>
                <Container className='border-none'>
                    <Row>
                        <div className='col-12 kutu'>
                            <h1 className="fw-bold">Hoşgeldiniz...Lütfen Giriş Bilgilerinizi Giriniz!</h1>
                            <form onSubmit={submitHandler}>
                                {(error !=="") ? ( <div className='error'>{error}</div >) : ""}
                                <div className="mb-3 mt-5">
                                    <input type="email" className="form-control mb-5 border-top-0 border-end-0 border-start-0 ps-0" placeholder='E-mail' onChange={e=>setDetails({...details,email:e.target.value})} value={details.email}/>

                                </div>
                                <div className="mb-3">
                                    <input type="password" className="form-control border-top-0 border-end-0 border-start-0 ps-0" placeholder='Password' onChange={e=>setDetails({...details,password:e.target.value})} value={details.password} />
                                </div>
                                <div>
                                    <label for="disabledSelect" className="form-label mt-4 opacity-75">Locale</label>
                                    <select id="disabledSelect" className="form-select border border-3 border-dark border-top-0 border-end-0 border-start-0 ps-0">
                                        <option>Türkçe</option>
                                        <option>İngilizce</option>

                                    </select>
                                    <div className="d-grid gap-2 mt-5">
                                        <button className="bacground" type="submit">Sign up</button>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </Row>
                </Container>
            </div>
    )
}

export default LoginForm
