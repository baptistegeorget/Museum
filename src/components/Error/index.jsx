import React from "react";

export function Error() {
    return (
        <section style={{padding: '40px 0', background: '#fff', fontFamily: 'Arvo, serif'}}>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 ">
                        <div className="col-sm-10 col-sm-offset-1  text-center">
                            <div style={{backgroundImage: 'url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)', height: '400px', backgroundPosition: 'center'}} className="four_zero_four_bg">
                                <h1 style={{fontSize: '80px'}} className="text-center ">404</h1>
                            </div>
                            <div style={{marginTop: '-50px'}} className="contant_box_404">
                                <h3 style={{fontSize: '80px'}} className="h2">
                                    Look like you're lost
                                </h3>
                                <a href="/home" style={{color: '#fff', padding: '10px 20px', background: '#39ac31', margin: '20px 0', display: 'inline-block'}} className="link_404">Go to Home</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


