/* eslint-disable */

import { TemplatePageShell } from "@/components/template-page-shell";

export const metadata = {
  title: "Plantilla Inmobiliaria Home Real Estate Next.js y Panel de Control",
  description: "Home Real Estate es una plantilla moderna de Next.js diseñada para agencias inmobiliarias.",
  keywords: ["Bienes raíces","Venta de propiedades","Compra de propiedades"],
};

const scripts = [
  "/vendor/jquery.min.js",
  "/vendor/bootstrap/js/bootstrap.bundle.min.js",
  "/vendor/wow/wow.min.js",
  "/vendor/slick/slick.min.js",
  "/vendor/fancybox/fancybox.umd.js",
  "/vendor/jquery.lazy.min.js",
  "/vendor/jquery.counterup.min.js",
  "/vendor/jquery.waypoints.min.js",
  "/vendor/nice-select/jquery.nice-select.min.js",
  "/vendor/validator.js",
  "/js/theme.js"
];

export default function TemplatePage() {
  return (
    <TemplatePageShell scripts={scripts}>
    <div className="main-page-wrapper">

    		<div id="preloader">
    			<div id="ctn-preloader" className="ctn-preloader">
    				<div className="icon"><img src="/images/loader.gif" alt="" className="m-auto d-block" width="64" /></div>
    			</div>
    		</div>




            <div className="modal fade" id="searchModal" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-fullscreen modal-dialog-centered">
                    <div className="modal-content d-flex justify-content-center">
                        <form action="#">
                            <input type="text" placeholder="Comprar Apartamentos, Alquilar Condominios, Vender Casas" />
                            <button><i className="fa-light fa-arrow-right-long"></i></button>
                        </form>
                    </div>
                </div>
            </div>




    		<header className="theme-main-menu menu-overlay menu-style-four sticky-menu">
    			<div className="inner-content gap-two">
    				<div className="top-header position-relative">
    					<div className="d-flex align-items-center">
    						<div className="logo order-lg-0">
    							<a href="/" className="d-flex align-items-center">
    								<img src="/images/logo/logo.svg" alt="" />
    							</a>
    						</div>

    						<div className="right-widget ms-auto me-3 me-lg-0 order-lg-3">
    							<ul className="d-flex align-items-center style-none">
    								<li className="d-none d-md-flex align-items-center login-btn-one me-4 me-xxl-5">
                                        <i className="fa-regular fa-phone-volume"></i>
                                        <a href="tel:+757-699-4478" className="tran3s">+757 699-4478</a>
                                    </li>
    								<li>
                                        <a href="#" data-bs-toggle="modal" data-bs-target="#loginModal" className="login-btn-two rounded-circle tran3s d-flex align-items-center justify-content-center"><i className="fa-regular fa-lock"></i></a>
                                    </li>
                                    <li>
                                        <a href="#" data-bs-toggle="modal" data-bs-target="#searchModal" className="search-btn-one rounded-circle tran3s d-flex align-items-center justify-content-center"><i className="bi bi-search"></i></a>
                                    </li>
    							</ul>
    						</div>
    						<nav className="navbar navbar-expand-lg p0 ms-lg-5 order-lg-2">
    							<button className="navbar-toggler d-block d-lg-none" type="button" data-bs-toggle="collapse"
    								data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
    								aria-label="Toggle navigation">
    								<span></span>
    							</button>
    							<div className="collapse navbar-collapse ms-xl-5" id="navbarNav">
    								<ul className="navbar-nav align-items-lg-center">
    									<li className="d-block d-lg-none"><div className="logo"><a href="/" className="d-block"><img src="/images/logo/logo.svg" alt="" /></a></div></li>
    									<li className="nav-item dashboard-menu">
    										<a className="nav-link" href="/dashboard/dashboard-index" target="_blank" rel="noopener noreferrer">Panel de Control</a>
    									</li>
    									<li className="nav-item dropdown">
    										<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
    											data-bs-auto-close="outside" aria-expanded="false">Inicio
    										</a>
    										<ul className="dropdown-menu">
    											<li><a href="/" className="dropdown-item"><span>Inicio 01</span></a></li>
    											<li><a href="/index-2" className="dropdown-item"><span>Inicio 02</span></a></li>
    											<li><a href="/index-3" className="dropdown-item"><span>Inicio 03</span></a></li>
    											<li><a href="/index-4" className="dropdown-item"><span>Inicio 04</span></a></li>
    											<li><a href="/index-5" className="dropdown-item"><span>Inicio 05</span></a></li>
    											<li><a href="/index-6" className="dropdown-item"><span>Inicio 06</span></a></li>
    											<li><a href="/index-7" className="dropdown-item"><span>Inicio 07</span></a></li>
    										</ul>
    									</li>
    									<li className="nav-item dropdown mega-dropdown-sm">
    							        	<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">Propiedades
    										</a>
    						                <ul className="dropdown-menu">
    							                <li className="row gx-1">
    												<div className="col-lg-4">
    													<div className="menu-column">
    														<h6 className="mega-menu-title">Tipo de Anuncio</h6>
    														<ul className="style-none mega-dropdown-list">
    															<li><a href="/listing_01" className="dropdown-item"><span>Cuadrícula Barra Lateral-1</span></a></li>
    															<li><a href="/listing_05" className="dropdown-item"><span>Cuadrícula Barra Lateral-2</span></a></li>
    															<li><a href="/listing_02" className="dropdown-item"><span>Lista Barra Lateral-1</span></a></li>
    															<li><a href="/listing_06" className="dropdown-item"><span>Lista Barra Lateral-2</span></a></li>
    															<li><a href="/listing_03" className="dropdown-item"><span>Cuadrícula Filtro Superior-1</span></a></li>
    															<li><a href="/listing_07" className="dropdown-item"><span>Cuadrícula Filtro Superior-2</span></a></li>
    															<li><a href="/listing_04" className="dropdown-item"><span>Lista Filtro Superior-1</span></a></li>
    															<li><a href="/listing_08" className="dropdown-item"><span>Lista Filtro Superior-2</span></a></li>
    															<li><a href="/listing_09" className="dropdown-item"><span>Cuadrícula Banner Filtro-1</span></a></li>
    														</ul>
    													</div> 
    												</div>
    												<div className="col-lg-4">
    													<div className="menu-column">
    														<h6 className="mega-menu-title">Tipo de Anuncio</h6>
    														<ul className="style-none mega-dropdown-list">
    															<li><a href="/listing_11" className="dropdown-item"><span>Cuadrícula Banner Filtro-2</span></a></li>
    															<li><a href="/listing_10" className="dropdown-item"><span>Lista Banner Filtro-1</span></a></li>
    															<li><a href="/listing_12" className="dropdown-item"><span>Lista Banner Filtro-2</span></a></li>
    															<li><a href="/listing_13" className="dropdown-item"><span>Cuadrícula Ancho Completo</span></a></li>
    															<li><a href="/listing_14" className="dropdown-item"><span>Cuadrícula Ancho Completo Mapa-1</span></a></li>
    															<li><a href="/listing_16" className="dropdown-item"><span>Cuadrícula Ancho Completo Mapa-2</span></a></li>
    															<li><a href="/listing_15" className="dropdown-item"><span>Lista Ancho Completo Mapa-1</span></a></li>
    															<li><a href="/listing_17" className="dropdown-item"><span>Lista Ancho Completo Mapa-2</span></a></li>
    														</ul>
    													</div> 
    												</div>
    												<div className="col-lg-4">
    													<div className="menu-column">
    														<h6 className="mega-menu-title">Anuncio Individual</h6>
    														<ul className="style-none mega-dropdown-list">
    															<li><a href="/listing_details_01" className="dropdown-item"><span>Detalles-1</span></a></li>
    															<li><a href="/listing_details_02" className="dropdown-item"><span>Detalles-2</span></a></li>
    															<li><a href="/listing_details_03" className="dropdown-item"><span>Detalles-3</span></a></li>
    															<li><a href="/listing_details_04" className="dropdown-item"><span>Detalles-4</span></a></li>
    															<li><a href="/listing_details_05" className="dropdown-item"><span>Detalles-5</span></a></li>
    															<li><a href="/listing_details_06" className="dropdown-item"><span>Detalles-6</span></a></li>
    														</ul>
    													</div> 
    												</div>
    											</li>
    						                </ul>
    						            </li>
    									<li className="nav-item dropdown mega-dropdown-sm">
    										<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
    											data-bs-auto-close="outside" aria-expanded="false">Páginas
    										</a>
    										<ul className="dropdown-menu">
    							                <li className="row gx-1">
    												<div className="col-lg-4">
    													<div className="menu-column">
    														<h6 className="mega-menu-title">Esenciales</h6>
    														<ul className="style-none mega-dropdown-list">
    															<li><a href="/about_us_01" className="dropdown-item"><span>Sobre nosotros -1</span></a></li>
    															<li><a href="/about_us_02" className="dropdown-item"><span>Sobre nosotros -2</span></a></li>
    															<li><a href="/agency" className="dropdown-item"><span>Agencia</span></a></li>
    															<li><a href="/agency_details" className="dropdown-item"><span>Detalles de Agencia</span></a></li>
    															<li><a href="/agent" className="dropdown-item"><span>Agente</span></a></li>
    															<li><a href="/agent_details" className="dropdown-item"><span>Detalles de Agente</span></a></li>
    														</ul>
    													</div> 
    												</div>
    												<div className="col-lg-4">
    													<div className="menu-column">
    														<h6 className="mega-menu-title">Características</h6>
    														<ul className="style-none mega-dropdown-list">
    															<li><a href="/project_01" className="dropdown-item"><span>Proyecto -1</span></a></li>
    															<li><a href="/project_02" className="dropdown-item"><span>Proyecto -2</span></a></li>
    															<li><a href="/project_03" className="dropdown-item"><span>Proyecto -3</span></a></li>
    															<li><a href="/project_04" className="dropdown-item"><span>Proyecto -4</span></a></li>
    															<li><a href="/project_details_01" className="dropdown-item"><span>Detalles del Proyecto</span></a></li>
    															<li><a href="/service_01" className="dropdown-item"><span>Servicios -1</span></a></li>
    															<li><a href="/service_02" className="dropdown-item"><span>Servicios -2</span></a></li>
    															<li><a href="/service_details" className="dropdown-item"><span>Detalles del Servicio</span></a></li>
    														</ul>
    													</div> 
    												</div>
    												<div className="col-lg-4">
    													<div className="menu-column">
    														<h6 className="mega-menu-title">Otros</h6>
    														<ul className="style-none mega-dropdown-list">
    															<li><a href="/compare" className="dropdown-item"><span>Comparar Propiedades</span></a></li>
    															<li><a href="/pricing_01" className="dropdown-item"><span>Precios -1</span></a></li>
    															<li><a href="/pricing_02" className="dropdown-item"><span>Precios -2</span></a></li>
    															<li><a href="/contact" className="dropdown-item"><span>Contáctanos</span></a></li>
    															<li><a href="/faq" className="dropdown-item"><span>Preguntas Frecuentes</span></a></li>
    															<li><a href="/404" className="dropdown-item"><span>Error 404</span></a></li>
    														</ul>
    													</div> 
    												</div>
    											</li>
    						                </ul>
    									</li>
    									<li className="nav-item dropdown">
    										<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
    											data-bs-auto-close="outside" aria-expanded="false">Blog
    										</a>
    										<ul className="dropdown-menu">
    											<li><a href="/blog_01" className="dropdown-item"><span>Cuadrícula de Blog</span></a></li>
    											<li><a href="/blog_02" className="dropdown-item"><span>Lista de Blog</span></a></li>
    											<li><a href="/blog_03" className="dropdown-item"><span>Blog 2 columnas</span></a></li>
    											<li><a href="/blog_details" className="dropdown-item"><span>Detalles del Blog</span></a></li>
    										</ul>
    									</li>
    									<li className="d-md-none d-flex align-items-center justify-content-center login-btn-one ps-2 pe-2 mt-40">
    										<span className="pe-3 fw-500">Llamar Ahora:</span>
                                        	<a href="tel:+757-699-4478" className="tran3s">+757 699-4478</a>
    									</li>
    								</ul>
    							</div>
    						</nav>
    					</div>
    				</div> 
    			</div> 
    		</header> 





    		<div className="hero-banner-four position-relative">
    			<div className="position-relative main-bg position-relative z-1 pt-150 xl-pt-120 md-pt-60 pb-150 xl-pb-120 md-pb-80">
                    <div className="hero-slider-one m0">
                        <div className="item m0"><div className="hero-img" style={{ backgroundImage: "url(images/media/img_32.jpg)" }}></div></div>
                        <div className="item m0"><div className="hero-img" style={{ backgroundImage: "url(images/media/img_27.jpg)" }}></div></div>
                        <div className="item m0"><div className="hero-img" style={{ backgroundImage: "url(images/media/img_28.jpg)" }}></div></div>
                    </div>

                    <div className="container position-relative z-2">
                        <div className="row">
                            <div className="col-lg-6 wow fadeInLeft">
                                <div className="mt-45">
    								<h1 className="hero-heading text-white fw-500">
    									Compra, Vende y Alquila.
    									<span className="d-block d-lg-inline-flex">
    										<img src="/images/lazy.svg" data-src="/images/media/img_33.jpg" alt="" className="lazy-img avatar" />
    										<img src="/images/lazy.svg" data-src="/images/media/img_34.jpg" alt="" className="lazy-img avatar" />
    										<img src="/images/lazy.svg" data-src="/images/media/img_35.jpg" alt="" className="lazy-img avatar" />
    										<img src="/images/lazy.svg" data-src="/images/media/img_36.jpg" alt="" className="lazy-img avatar" />
    									</span>
    								</h1>
    								<p className="fs-24 text-white pt-40 pb-30 md-pb-20 pe-xl-5">Explora una vasta selección de más de 745,000 anuncios, incluyendo apartamentos, lotes y terrenos.</p>
    								<div className="d-inline-flex flex-wrap align-items-center">
    									<a href="/listing_01" className="btn-two rounded-0 border-0 mt-15 me-4"><span>Explorar Todo</span></a>
    									<a href="/contact" className="btn-eight inverse mt-15"><span>Solicitar una Llamada</span> <i className="fa-sharp fa-light fa-arrow-right-long"></i></a>
    								</div>
    							</div>
                            </div>
                            <div className="col-lg-5 col-lg-6 ms-auto wow fadeInRight">
                                <div className="search-wrapper-two position-relative ms-xl-5 ms-lg-4 ps-xxl-4 md-mt-60">
                                    <nav className="search-filter-nav-two d-inline-flex">
                                        <div className="nav nav-tabs border-0" role="tablist">
                                            <button className="nav-link active" id="buy-tab" data-bs-toggle="tab" data-bs-target="#buy" type="button" role="tab" aria-controls="buy" aria-selected="true">Comprar</button>
                                            <button className="nav-link" id="rent-tab" data-bs-toggle="tab" data-bs-target="#rent" type="button" role="tab" aria-controls="rent" aria-selected="false">Alquilar</button>
                                            <button className="nav-link" id="sell-tab" data-bs-toggle="tab" data-bs-target="#sell" type="button" role="tab" aria-controls="sell" aria-selected="false">Vender</button>
                                        </div>
                                    </nav>
                                    <div className="bg-wrapper position-relative z-1">
                                        <h4 className="mb-35 xl-mb-30">¡Encuentra y Compra Ahora!</h4>
                                        <div className="tab-content">
                                            <div className="tab-pane show active" id="buy" role="tabpanel" aria-labelledby="buy-tab" tabIndex="0">
                                                <form action="#">
                                                    <div className="row gx-0 align-items-center">
                                                        <div className="col-12">
                                                            <div className="input-box-one bottom-border mb-25">
                                                                <div className="label">Busco...</div>
                                                                <select className="nice-select fw-normal">
                                                                    <option value="1">Comprar Apartamentos</option>
                                                                    <option value="2">Comprar Condominios</option>
                                                                    <option value="3">Comprar Casas</option>
                                                                    <option value="4">Comprar Industriales</option>
                                                                    <option value="6">Comprar Villas</option>
                                                                </select>
                                                            </div>

                                                        </div>
                                                        <div className="col-12">
                                                            <div className="input-box-one bottom-border mb-25">
                                                                <div className="label">Ubicación</div>
                                                                <select className="nice-select location fw-normal">
                                                                    <option value="1">Dhanmondi, Dhaka</option>
                                                                    <option value="2">Acapulco, México</option>
                                                                    <option value="3">Berlín, Alemania</option>
                                                                    <option value="4">Cannes, Francia</option>
                                                                    <option value="5">Delhi, India</option>
                                                                    <option value="6">Giza, Egipto </option>
                                                                    <option value="7">La Habana, Cuba</option>
                                                                </select>
                                                            </div>

                                                        </div>
                                                        <div className="col-12">
                                                            <div className="input-box-one bottom-border mb-50 lg-mb-30">
                                                                <div className="label">Rango de Precio</div>
                                                                <select className="nice-select fw-normal">
                                                                    <option value="1">$10,000 - $200,000</option>
                                                                    <option value="2">$200,000 - $300,000</option>
                                                                    <option value="2">$300,000 - $400,000</option>
                                                                </select>
                                                            </div>

                                                        </div>
                                                        <div className="col-12">
                                                            <div className="input-box-one">
                                                                <button className="btn-five text-uppercase rounded-0 w-100">Buscar</button>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="tab-pane" id="rent" role="tabpanel" aria-labelledby="rent-tab" tabIndex="0">
                                                <form action="#">
                                                    <div className="row gx-0 align-items-center">
                                                        <div className="col-12">
                                                            <div className="input-box-one bottom-border mb-25">
                                                                <div className="label">Busco...</div>
                                                                <select className="nice-select fw-normal">
                                                                    <option value="1">Alquilar Apartamentos</option>
                                                                    <option value="2">Alquilar Condominios</option>
                                                                    <option value="3">Alquilar Casas</option>
                                                                    <option value="4">Alquilar Industriales</option>
                                                                    <option value="6">Alquilar Villas</option>
                                                                </select>
                                                            </div>

                                                        </div>
                                                        <div className="col-12">
                                                            <div className="input-box-one bottom-border mb-25">
                                                                <div className="label">Ubicación</div>
                                                                <select className="nice-select location fw-normal">
                                                                    <option value="1">Dhanmondi, Dhaka</option>
                                                                    <option value="2">Acapulco, México</option>
                                                                    <option value="3">Berlín, Alemania</option>
                                                                    <option value="4">Cannes, Francia</option>
                                                                    <option value="5">Delhi, India</option>
                                                                    <option value="6">Giza, Egipto </option>
                                                                    <option value="7">La Habana, Cuba</option>
                                                                </select>
                                                            </div>

                                                        </div>
                                                        <div className="col-12">
                                                            <div className="input-box-one bottom-border mb-50 lg-mb-30">
                                                                <div className="label">Rango de Precio</div>
                                                                <select className="nice-select fw-normal">
                                                                    <option value="1">$10,000 - $200,000</option>
                                                                    <option value="2">$200,000 - $300,000</option>
                                                                    <option value="2">$300,000 - $400,000</option>
                                                                </select>
                                                            </div>

                                                        </div>
                                                        <div className="col-12">
                                                            <div className="input-box-one">
                                                                <button className="btn-five text-uppercase rounded-0 w-100">Buscar</button>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
    										<div className="tab-pane" id="sell" role="tabpanel" aria-labelledby="sell-tab" tabIndex="0">
                                                <form action="#">
                                                    <div className="row gx-0 align-items-center">
                                                        <div className="col-12">
                                                            <div className="input-box-one bottom-border mb-25">
                                                                <div className="label">Busco...</div>
                                                                <select className="nice-select fw-normal">
                                                                    <option value="1">Vender Apartamentos</option>
                                                                    <option value="2">Vender Condominios</option>
                                                                    <option value="3">Vender Casas</option>
                                                                    <option value="4">Vender Industriales</option>
                                                                    <option value="6">Vender Villas</option>
                                                                </select>
                                                            </div>

                                                        </div>
                                                        <div className="col-12">
                                                            <div className="input-box-one bottom-border mb-25">
                                                                <div className="label">Ubicación</div>
                                                                <select className="nice-select location fw-normal">
                                                                    <option value="1">Dhanmondi, Dhaka</option>
                                                                    <option value="2">Acapulco, México</option>
                                                                    <option value="3">Berlín, Alemania</option>
                                                                    <option value="4">Cannes, Francia</option>
                                                                    <option value="5">Delhi, India</option>
                                                                    <option value="6">Giza, Egipto </option>
                                                                    <option value="7">La Habana, Cuba</option>
                                                                </select>
                                                            </div>

                                                        </div>
                                                        <div className="col-12">
                                                            <div className="input-box-one bottom-border mb-50 lg-mb-30">
                                                                <div className="label">Rango de Precio</div>
                                                                <select className="nice-select fw-normal">
                                                                    <option value="1">$10,000 - $200,000</option>
                                                                    <option value="2">$200,000 - $300,000</option>
                                                                    <option value="2">$300,000 - $400,000</option>
                                                                </select>
                                                            </div>

                                                        </div>
                                                        <div className="col-12">
                                                            <div className="input-box-one">
                                                                <button className="btn-five text-uppercase rounded-0 w-100">Buscar</button>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
    			<div className="social-elemnet">
    				<ul className="style-none d-flex align-items-center">
    					<li><a href="#" className="tran3s">Fb.</a></li>
    					<li><a href="#" className="tran3s">Tw.</a></li>
    					<li><a href="#" className="tran3s">Inst.</a></li>
    				</ul>
    			</div>
    			<div className="scroll-bar"><span>Scroll</span></div>
    		</div>





    		<div className="property-listing-five mt-170 xl-mt-120">
    			<div className="container container-large">
    				<div className="position-relative">
    					<div className="title-one mb-25 lg-mb-10 wow fadeInUp">
    						<h3>Nuevas Propiedades</h3>
    						<p className="fs-22">Explora las últimas propiedades en venta, alquiler e hipoteca.</p>
    					</div>


    					<div className="row gx-xxl-5">
    						<div className="col-lg-4 col-md-6 d-flex mt-40 wow fadeInUp">
    							<div className="listing-card-one style-two shadow-none h-100 w-100">
    								<div className="img-gallery">
    									<div className="position-relative overflow-hidden">
    										<div className="tag fw-500">EN ALQUILER</div>
    										<div id="carousel1" className="carousel slide">
    											<div className="carousel-indicators">
    												<button type="button" data-bs-target="#carousel1" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    												<button type="button" data-bs-target="#carousel1" data-bs-slide-to="1" aria-label="Slide 2"></button>
    												<button type="button" data-bs-target="#carousel1" data-bs-slide-to="2" aria-label="Slide 3"></button>
    											</div>
    											<div className="carousel-inner">
    												<div className="carousel-item active" data-bs-interval="1000000">
    													<a href="#" className="d-block"><img src="/images/listing/img_17.jpg" className="w-100" alt="..." /></a>
    												</div>
    												<div className="carousel-item" data-bs-interval="1000000">
    													<a href="#" className="d-block"><img src="/images/listing/img_18.jpg" className="w-100" alt="..." /></a>
    												</div>
    												<div className="carousel-item" data-bs-interval="1000000">
    													<a href="#" className="d-block"><img src="/images/listing/img_19.jpg" className="w-100" alt="..." /></a>
    												</div>
    											</div>
    										</div>
    									</div>
    								</div>

    								<div className="property-info pt-20">
    									<a href="/listing_details_03" className="title tran3s">Villa Blueberry</a>
    									<div className="address">Mirpur 10, Estadio Dhaka 1208</div>
    									<ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between pb-15 pt-5">
    										<li className="d-flex align-items-center">
    											<img src="/images/lazy.svg" data-src="/images/icon/icon_32.svg" alt="" className="lazy-img icon me-2" />
    											<span className="fs-16"><span className="color-dark">1370</span> m²</span>
    										</li>
    										<li className="d-flex align-items-center">
    											<img src="/images/lazy.svg" data-src="/images/icon/icon_33.svg" alt="" className="lazy-img icon me-2" />
    											<span className="fs-16"><span className="color-dark">03</span> hab</span>
    										</li>
    										<li className="d-flex align-items-center">
    											<img src="/images/lazy.svg" data-src="/images/icon/icon_34.svg" alt="" className="lazy-img icon me-2" />
    											<span className="fs-16"><span className="color-dark">02</span> baños</span>
    										</li>
    									</ul>
    									<div className="pl-footer top-border bottom-border d-flex align-items-center justify-content-between">
    										<strong className="price fw-500 color-dark">$34,900.00</strong>
    										<a href="/listing_details_03" className="btn-four"><i className="bi bi-arrow-up-right"></i></a>
    									</div>
    								</div>

    							</div>

    						</div>
    						<div className="col-lg-4 col-md-6 d-flex mt-40 wow fadeInUp" data-wow-delay="0.1s">
    							<div className="listing-card-one style-two shadow-none h-100 w-100">
    								<div className="img-gallery">
    									<div className="position-relative overflow-hidden">
    										<div className="tag fw-500">EN VENTA</div>
    										<div id="carousel2" className="carousel slide">
    											<div className="carousel-indicators">
    												<button type="button" data-bs-target="#carousel2" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    												<button type="button" data-bs-target="#carousel2" data-bs-slide-to="1" aria-label="Slide 2"></button>
    												<button type="button" data-bs-target="#carousel2" data-bs-slide-to="2" aria-label="Slide 3"></button>
    											</div>
    											<div className="carousel-inner">
    												<div className="carousel-item active" data-bs-interval="1000000">
    													<a href="#" className="d-block"><img src="/images/listing/img_18.jpg" className="w-100" alt="..." /></a>
    												</div>
    												<div className="carousel-item" data-bs-interval="1000000">
    													<a href="#" className="d-block"><img src="/images/listing/img_19.jpg" className="w-100" alt="..." /></a>
    												</div>
    												<div className="carousel-item" data-bs-interval="1000000">
    													<a href="#" className="d-block"><img src="/images/listing/img_17.jpg" className="w-100" alt="..." /></a>
    												</div>
    											</div>
    										</div>
    									</div>
    								</div>

    								<div className="property-info pt-20">
    									<a href="/listing_details_03" className="title tran3s">Villa White House</a>
    									<div className="address">Muza link road, ca, usa</div>
    									<ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between pb-15 pt-5">
    										<li className="d-flex align-items-center">
    											<img src="/images/lazy.svg" data-src="/images/icon/icon_32.svg" alt="" className="lazy-img icon me-2" />
    											<span className="fs-16"><span className="color-dark">1270</span> m²</span>
    										</li>
    										<li className="d-flex align-items-center">
    											<img src="/images/lazy.svg" data-src="/images/icon/icon_33.svg" alt="" className="lazy-img icon me-2" />
    											<span className="fs-16"><span className="color-dark">02</span> hab</span>
    										</li>
    										<li className="d-flex align-items-center">
    											<img src="/images/lazy.svg" data-src="/images/icon/icon_34.svg" alt="" className="lazy-img icon me-2" />
    											<span className="fs-16"><span className="color-dark">02</span> baños</span>
    										</li>
    									</ul>
    									<div className="pl-footer top-border bottom-border d-flex align-items-center justify-content-between">
    										<strong className="price fw-500 color-dark">$28,100.00</strong>
    										<a href="/listing_details_03" className="btn-four"><i className="bi bi-arrow-up-right"></i></a>
    									</div>
    								</div>

    							</div>

    						</div>
    						<div className="col-lg-4 col-md-6 d-flex mt-40 wow fadeInUp" data-wow-delay="0.2s">
    							<div className="listing-card-one style-two shadow-none h-100 w-100">
    								<div className="img-gallery">
    									<div className="position-relative overflow-hidden">
    										<div className="tag fw-500">EN VENTA</div>
    										<div id="carousel3" className="carousel slide">
    											<div className="carousel-indicators">
    												<button type="button" data-bs-target="#carousel3" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    												<button type="button" data-bs-target="#carousel3" data-bs-slide-to="1" aria-label="Slide 2"></button>
    												<button type="button" data-bs-target="#carousel3" data-bs-slide-to="2" aria-label="Slide 3"></button>
    											</div>
    											<div className="carousel-inner">
    												<div className="carousel-item active" data-bs-interval="1000000">
    													<a href="#" className="d-block"><img src="/images/listing/img_19.jpg" className="w-100" alt="..." /></a>
    												</div>
    												<div className="carousel-item" data-bs-interval="1000000">
    													<a href="#" className="d-block"><img src="/images/listing/img_18.jpg" className="w-100" alt="..." /></a>
    												</div>
    												<div className="carousel-item" data-bs-interval="1000000">
    													<a href="#" className="d-block"><img src="/images/listing/img_17.jpg" className="w-100" alt="..." /></a>
    												</div>
    											</div>
    										</div>
    									</div>
    								</div>

    								<div className="property-info pt-20">
    									<a href="/listing_details_03" className="title tran3s">Villa de lujo en el lago Dal.</a>
    									<div className="address">Mirpur 10, Estadio</div>
    									<ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between pb-15 pt-5">
    										<li className="d-flex align-items-center">
    											<img src="/images/lazy.svg" data-src="/images/icon/icon_32.svg" alt="" className="lazy-img icon me-2" />
    											<span className="fs-16"><span className="color-dark">1270</span> m²</span>
    										</li>
    										<li className="d-flex align-items-center">
    											<img src="/images/lazy.svg" data-src="/images/icon/icon_33.svg" alt="" className="lazy-img icon me-2" />
    											<span className="fs-16"><span className="color-dark">02</span> hab</span>
    										</li>
    										<li className="d-flex align-items-center">
    											<img src="/images/lazy.svg" data-src="/images/icon/icon_34.svg" alt="" className="lazy-img icon me-2" />
    											<span className="fs-16">02 baños</span>
    										</li>
    									</ul>
    									<div className="pl-footer top-border bottom-border d-flex align-items-center justify-content-between">
    										<strong className="price fw-500 color-dark">$42,500.00</strong>
    										<a href="/listing_details_03" className="btn-four"><i className="bi bi-arrow-up-right"></i></a>
    									</div>
    								</div>

    							</div>

    						</div>
    					</div>

    					<div className="section-btn text-center md-mt-60">
    						<a href="/listing_08" className="btn-eight"><span>Explorar Todo</span> <i className="bi bi-arrow-up-right"></i></a>
    					</div>
    				</div>
    			</div>
    		</div>




    		<div className="property-listing-one mt-170 xl-mt-120">
    			<div className="container container-large">
    				<div className="position-relative">
    					<div className="title-one mb-25 lg-mb-10 wow fadeInUp">
    						<h3>Propiedades Destacadas</h3>
    						<p className="fs-22 mt-xs">Explora propiedades destacadas en venta.</p>
    					</div>


    					<div className="row gx-xxl-5">
    						<div className="col-lg-4 col-md-6 mt-40 wow fadeInUp">
    							<div className="listing-card-four overflow-hidden d-flex align-items-end position-relative z-1" style={{ backgroundImage: "url(images/listing/img_20.jpg)" }}>
    								<div className="tag fw-500">ALQUILER</div>
    								<div className="property-info tran3s w-100">
    									<div className="d-flex align-items-center justify-content-between">
    										<div className="pe-3">
    											<a href="/listing_details_04" className="title fw-500 tran4s">Villa Blueberry.</a>
    											<div className="address tran4s">Mirpur 10, Estadio Dhaka 1208</div>
    										</div>
    										<a href="/listing_details_04" className="btn-four inverse"><i className="bi bi-arrow-up-right"></i></a>
    									</div>

    									<div className="pl-footer tran4s">
    										<ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between">
    											<li>
    												<strong className="color-dark fw-500">2137</strong> 
    												<span className="fs-16">m²</span>
    											</li>
    											<li>
    												<strong className="color-dark fw-500">03</strong> 
    												<span className="fs-16">hab</span>
    											</li>
    											<li>
    												<strong className="color-dark fw-500">01</strong> 
    												<span className="fs-16">cocina</span>
    											</li>
    											<li>
    												<strong className="color-dark fw-500">02</strong> 
    												<span className="fs-16">baños</span>
    											</li>
    										</ul>
    									</div>
    								</div>

    							</div>

    						</div>
    						<div className="col-lg-4 col-md-6 mt-40 wow fadeInUp" data-wow-delay="0.1s">
    							<div className="listing-card-four overflow-hidden d-flex align-items-end position-relative z-1" style={{ backgroundImage: "url(images/listing/img_21.jpg)" }}>
    								<div className="tag fw-500">VENTA</div>
    								<div className="property-info tran3s w-100">
    									<div className="d-flex align-items-center justify-content-between">
    										<div className="pe-3">
    											<a href="/listing_details_04" className="title fw-500 tran4s">Villa con Piscina</a>
    											<div className="address tran4s">127 green road, California, EE. UU.</div>
    										</div>
    										<a href="/listing_details_04" className="btn-four inverse"><i className="bi bi-arrow-up-right"></i></a>
    									</div>

    									<div className="pl-footer tran4s">
    										<ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between">
    											<li>
    												<strong className="color-dark fw-500">2137</strong> 
    												<span className="fs-16">m²</span>
    											</li>
    											<li>
    												<strong className="color-dark fw-500">03</strong> 
    												<span className="fs-16">hab</span>
    											</li>
    											<li>
    												<strong className="color-dark fw-500">01</strong> 
    												<span className="fs-16">cocina</span>
    											</li>
    											<li>
    												<strong className="color-dark fw-500">02</strong> 
    												<span className="fs-16">baños</span>
    											</li>
    										</ul>
    									</div>
    								</div>

    							</div>

    						</div>
    						<div className="col-lg-4 col-md-6 mt-40 wow fadeInUp" data-wow-delay="0.2s">
    							<div className="listing-card-four overflow-hidden d-flex align-items-end position-relative z-1" style={{ backgroundImage: "url(images/listing/img_22.jpg)" }}>
    								<div className="tag fw-500">ALQUILER</div>
    								<div className="property-info tran3s w-100">
    									<div className="d-flex align-items-center justify-content-between">
    										<div className="pe-3">
    											<a href="/listing_details_04" className="title fw-500 tran4s">Dúplex Moderno</a>
    											<div className="address tran4s">Twin tower, calle 32, Florida</div>
    										</div>
    										<a href="/listing_details_04" className="btn-four inverse"><i className="bi bi-arrow-up-right"></i></a>
    									</div>

    									<div className="pl-footer tran4s">
    										<ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between">
    											<li>
    												<strong className="color-dark fw-500">2137</strong> 
    												<span className="fs-16">m²</span>
    											</li>
    											<li>
    												<strong className="color-dark fw-500">03</strong> 
    												<span className="fs-16">hab</span>
    											</li>
    											<li>
    												<strong className="color-dark fw-500">01</strong> 
    												<span className="fs-16">cocina</span>
    											</li>
    											<li>
    												<strong className="color-dark fw-500">02</strong> 
    												<span className="fs-16">baños</span>
    											</li>
    										</ul>
    									</div>
    								</div>

    							</div>

    						</div>
    					</div>

    					<div className="section-btn text-center md-mt-60">
    						<a href="/listing_06" className="btn-eight"><span>Explorar Todo</span> <i className="bi bi-arrow-up-right"></i></a>
    					</div>
    				</div>
    			</div>
    		</div>





    		<div className="block-feature-nine bg-pink-two image-bg position-relative z-1 mt-170 xl-mt-120 pt-85 pb-110 xl-pb-80">
    			<div className="container container-large">
    				<div className="position-relative">
    					<div className="row">
    						<div className="col-xxl-6 col-xl-7 col-lg-8">
    							<div className="title-one mb-30 lg-mb-20 wow fadeInUp">
    								<h3>Estamos aquí para ayudarte a encontrar propiedades.</h3>
    								<p className="fs-22">Más de 745K anuncios de apartamentos, lotes y terrenos disponibles hoy.</p>
    							</div>

    						</div>
    					</div>

    					<div className="row gx-xxl-5">
    						<div className="col-lg-4 col-md-6 mt-30 d-flex wow fadeInUp">
    							<div className="card-style-six d-inline-flex flex-column align-items-start tran3s h-100 w-100">
    								<div className="icon d-flex align-items-center justify-content-center rounded-circle tran3s"><img src="/images/lazy.svg" data-src="/images/icon/icon_35.svg" alt="" className="lazy-img" /></div>
    								<h5 className="mt-35 mb-20">Comprar una casa</h5>
    								<p className="mb-40">Explora los más de 2 millones de hogares de Home Real Estate y descubre tu espacio ideal para vivir.</p>
    								<a href="/listing_03" className="btn-twelve rounded-0 sm mt-auto">Comprar Casa</a>
    							</div>

    						</div>
    						<div className="col-lg-4 col-md-6 mt-30 d-flex wow fadeInUp" data-wow-delay="0.1s">
    							<div className="card-style-six d-inline-flex flex-column align-items-start tran3s h-100 w-100">
    								<div className="icon d-flex align-items-center justify-content-center rounded-circle tran3s"><img src="/images/lazy.svg" data-src="/images/icon/icon_36.svg" alt="" className="lazy-img" /></div>
    								<h5 className="mt-35 mb-20">Alquilar una casa</h5>
    								<p className="mb-40">Descubre un alquiler que te encantará en Home Real Estate, gracias a más de 35 filtros.</p>
    								<a href="/listing_03" className="btn-twelve rounded-0 sm mt-auto">Alquilar Casa</a>
    							</div>

    						</div>
    						<div className="col-lg-4 col-md-6 mt-30 d-flex wow fadeInUp" data-wow-delay="0.2s">
    							<div className="card-style-six d-inline-flex flex-column align-items-start tran3s h-100 w-100">
    								<div className="icon d-flex align-items-center justify-content-center rounded-circle tran3s"><img src="/images/lazy.svg" data-src="/images/icon/icon_37.svg" alt="" className="lazy-img" /></div>
    								<h5 className="mt-35 mb-20">Vender Casa</h5>
    								<p className="mb-40">Publica, vende y prospera con nuestra excelente agencia inmobiliaria. Es muy fácil y divertido.</p>
    								<a href="/listing_03" className="btn-twelve rounded-0 sm mt-auto">Vender Casa</a>
    							</div>

    						</div>
    					</div>
    				</div>
    			</div>
    		</div>





    		<div className="category-section-two mt-170 xl-mt-120">
    			<div className="container container-large">
                    <div className="position-relative">
                        <div className="title-one text-center text-lg-start mb-60 xl-mb-40 lg-mb-20 wow fadeInUp">
    						<h3>Categorías Populares.</h3>
    					</div>


    					<div className="wrapper flex-wrap d-flex justify-content-center justify-content-md-between align-items-center">
    						<div className="card-style-seven position-relative z-1 rounded-circle overflow-hidden d-flex align-items-center justify-content-center wow fadeInUp" style={{ backgroundImage: "url(images/media/img_38.jpg)" }}>
    							<a href="/listing_03" className="title stretched-link"><h4 className="text-white tran3s">Apartamentos</h4></a>
    						</div>

    						<div className="card-style-seven position-relative z-1 rounded-circle overflow-hidden d-flex align-items-center justify-content-center wow fadeInUp" style={{ backgroundImage: "url(images/media/img_39.jpg)" }} data-wow-delay="0.1s">
    							<a href="/listing_03" className="title stretched-link"><h4 className="text-white tran3s">Casa</h4></a>
    						</div>

    						<div className="card-style-seven position-relative z-1 rounded-circle overflow-hidden d-flex align-items-center justify-content-center wow fadeInUp" style={{ backgroundImage: "url(images/media/img_40.jpg)" }} data-wow-delay="0.2s">
    							<a href="/listing_03" className="title stretched-link"><h4 className="text-white tran3s">Lofts</h4></a>
    						</div>

    						<div className="card-style-seven position-relative z-1 rounded-circle overflow-hidden d-flex align-items-center justify-content-center wow fadeInUp" style={{ backgroundImage: "url(images/media/img_41.jpg)" }} data-wow-delay="0.3s">
    							<a href="/listing_03" className="title stretched-link"><h4 className="text-white tran3s">Villa</h4></a>
    						</div>

    					</div>
                        <div className="section-btn text-center md-mt-60">
                            <a href="/listing_02" className="btn-eleven"><span>Ver todas las categorías</span> <i className="bi bi-chevron-right"></i></a>
                        </div>

                    </div>
                </div>
    		</div>






    		<div className="block-feature-ten mt-200 xl-mt-160 lg-mt-120 md-mt-100">
    			<div className="container container-large">
    				<div className="row">
    					<div className="col-xxl-5 col-lg-6 ms-auto order-lg-last wow fadeInRight">
    						<div className="pt-40 xl-pt-20 pb-110 xl-pb-60">
    							<div className="title-one mb-45 lg-mb-20">
    								<h3>Encuentra tu Combinación Perfecta Fácilmente.</h3>
    							</div>

    							<p className="fs-24 mb-45">Explora más de 745,000 hogares para compra, alquiler y opciones de hipoteca en nuestros listados.</p>
    							<form action="#" className="email-form position-relative z-1">
    								<input type="email" placeholder="Tu Correo Electrónico..." />
    								<button className="btn-two">Descubrir</button>
    							</form>
    							<p className="fs-16 mt-10">Para más detalles por favor <a href="#" className="color-dark text-decoration-underline fst-italic">contáctanos</a></p>
    							<div className="counter-wrapper pt-15 pe-xl-5">
    								<div className="row">
    									<div className="col-xxl-6 col-sm-5">
    										<div className="counter-block-one mt-20">
    											<div className="main-count fw-500 color-dark"><span className="counter">1.2</span>x</div>
    											<span>Motor de búsqueda rápido</span>
    										</div>

    									</div>
    									<div className="col-xxl-6 col-sm-7">
    										<div className="counter-block-one mt-20">
    											<div className="main-count fw-500 color-dark">$<span className="counter">1.3</span>mil+</div>
    											<span>Propiedades vendidas el año pasado</span>
    										</div>

    									</div>
    								</div>
    							</div>
    						</div>
    					</div>
    					<div className="col-lg-6">
    						<div className="media-gallery position-relative z-1 h-100 wow fadeInLeft">
    							<div className="bg" style={{ backgroundImage: "url(images/media/img_42.jpg)" }}>
    								<div className="card-style-three p0">
    									<div className="bg-wrapper text-center">
    										<h3>07+</h3>
    										<p>Años de Experiencia <br />con orgullo.</p>
    									</div>
    								</div>
    								<img src="/images/lazy.svg" data-src="/images/assets/screen_05.jpg" alt="" className="lazy-img screen_01" />
    							</div>
    						</div>

    					</div>
    				</div>
    			</div>
    		</div>





    		<div className="feedback-section-five mt-200 xl-mt-150 lg-mt-120">
    			<div className="container container-large">
    				<div className="bg-pink-two bg-wrapper position-relative z-1 pt-60 lg-pt-40 pb-45 md-pb-30">
    					<div className="content-wrapper">
    						<div className="icon d-flex align-items-center justify-content-center rounded-circle mb-35"><img src="/images/lazy.svg" data-src="/images/icon/icon_38.svg" alt="" className="lazy-img" /></div>

    						<div className="feedback-slider-one">
    							<div className="item">
    								<div className="feedback-block-five">
    									<blockquote>Soluciones rápidas combinadas con un <span>rendimiento</span> extraordinario, una recomendación inequívoca.</blockquote>
    									<div className="d-flex align-items-center justify-content-end">
    										<div className="pe-3 text-end">
    											<h6 className="fs-20 m0">Musa Delimuza</h6>
    											<span className="fs-16 opacity-50">Miami, EE. UU.</span>
    										</div>
    										<img src="/images/media/img_01.jpg" alt="" className="rounded-circle avatar" />
    									</div>
    								</div>

    							</div>
    							<div className="item">
    								<div className="feedback-block-five">
    									<blockquote>Encontramos la casa de nuestros sueños. Excelente <span>negocio</span> con ellos. Gracias por el excelente servicio.</blockquote>
    									<div className="d-flex align-items-center justify-content-end">
    										<div className="pe-3 text-end">
    											<h6 className="fs-20 m0">Alina Cruse</h6>
    											<span className="fs-16 opacity-50">Miami, Italia</span>
    										</div>
    										<img src="/images/media/img_02.jpg" alt="" className="rounded-circle avatar" />
    									</div>
    								</div>

    							</div>
    							<div className="item">
    								<div className="feedback-block-five">
    									<blockquote>Servicio eficiente y amable, nos guiaron <span>perfectamente</span>. Estoy satisfecho con nuestro nuevo hogar. ¡Gracias!</blockquote>
    									<div className="d-flex align-items-center justify-content-end">
    										<div className="pe-3 text-end">
    											<h6 className="fs-20 m0">Rashed Ka.</h6>
    											<span className="fs-16 opacity-50">Miami, EE. UU.</span>
    										</div>
    										<img src="/images/media/img_03.jpg" alt="" className="rounded-circle avatar" />
    									</div>
    								</div>

    							</div>
    						</div>
    					</div>

    					<div className="rating-wrapper">
    						<img src="/images/lazy.svg" data-src="/images/assets/rating_02.png" alt="" className="lazy-img" />
    						<p className="m0 pt-10"><span className="fw-500 color-dark">13k valoraciones</span> (4.7 Puntuación)</p>
    					</div>

    				</div>
    			</div>
    		</div>





    		<div className="partner-section-two mt-80">
    			<div className="container container-large">
    				<div className="wrapper bottom-border pb-65 md-pb-30">
    					<div className="row align-items-center">
    						<div className="col-lg-4">
    							<h6 className="fw-normal text-center text-lg-start md-pb-40 fs-24 m0">Con la confianza de <span className="fw-500 text-decoration-underline color-dark">más de 15,000</span> Clientes</h6>
    						</div>
    						<div className="col-lg-8">
    							<div className="partner-logo-two">
    								<div className="item"><img src="/images/logo/p_logo_07.png" alt="" /></div>
    								<div className="item"><img src="/images/logo/p_logo_08.png" alt="" /></div>
    								<div className="item"><img src="/images/logo/p_logo_09.png" alt="" /></div>
    								<div className="item"><img src="/images/logo/p_logo_10.png" alt="" /></div>
    								<div className="item"><img src="/images/logo/p_logo_11.png" alt="" /></div>
    								<div className="item"><img src="/images/logo/p_logo_12.png" alt="" /></div>
    								<div className="item"><img src="/images/logo/p_logo_09.png" alt="" /></div>
    							</div>
    						</div>
    					</div>
    				</div>
    			</div>
    		</div>





    		<div className="blog-section-two mt-170 xl-mt-120">
    			<div className="container container-large">
    				<div className="position-relative">
    					<div className="title-one mb-50 xl-mb-30 lg-mb-10 wow fadeInUp">
    						<h3>Nuestro Blog</h3>
    					</div>


    					<div className="row gx-xxl-5">
    						<div className="col-lg-4 col-md-6">
    							<article className="blog-meta-two tran3s position-relative z-1 mt-35 wow fadeInUp">
    								<figure className="post-img position-relative m0" style={{ backgroundImage: "url(images/blog/blog_img_03.jpg)" }}>
    									<a href="/blog_details" className="date">08 ENE</a>
    								</figure>
    								<div className="post-data">
    									<div className="post-info"><a href="/blog_details">Mark Quins .</a> 7 min</div>
    									<div className="d-flex justify-content-between align-items-sm-center flex-wrap">
    										<a href="/blog_details" className="blog-title"><h4>Print, publishing qui visual ux layout mockups.</h4></a>
    										<a href="#" className="btn-four"><i className="bi bi-arrow-up-right"></i></a>
    									</div>
    								</div>
    								<div className="hover-content tran3s">
    									<a href="/blog_details" className="date">08 ENE</a>
    									<div className="post-data">
    										<div className="post-info"><a href="/blog_details">Mark Quins .</a> 7 min</div>
    										<div className="d-flex justify-content-between align-items-sm-center flex-wrap">
    											<a href="/blog_details" className="blog-title"><h4>Print, publishing qui visual ux layout mockups.</h4></a>
    										</div>
    									</div>
    									<a href="#" className="btn-four inverse rounded-circle"><i className="fa-thin fa-arrow-up-right"></i></a>
    								</div>

    							</article>

    						</div>
    						<div className="col-lg-4 col-md-6">
    							<article className="blog-meta-two tran3s position-relative z-1 mt-35 wow fadeInUp">
    								<figure className="post-img position-relative m0" style={{ backgroundImage: "url(images/blog/blog_img_01.jpg)" }}>
    									<a href="/blog_details" className="date">17 AGO</a>
    								</figure>
    								<div className="post-data">
    									<div className="post-info"><a href="/blog_details">Rashed Kabir .</a> 7 min</div>
    									<div className="d-flex justify-content-between align-items-sm-center flex-wrap">
    										<a href="/blog_details" className="blog-title"><h4>Lista de verificación del diseñador para cada proyecto UX/UI.</h4></a>
    										<a href="#" className="btn-four"><i className="bi bi-arrow-up-right"></i></a>
    									</div>
    								</div>
    								<div className="hover-content tran3s">
    									<a href="/blog_details" className="date">17 AGO</a>
    									<div className="post-data">
    										<div className="post-info"><a href="/blog_details">Rashed Kabir .</a> 7 min</div>
    										<div className="d-flex justify-content-between align-items-sm-center flex-wrap">
    											<a href="/blog_details" className="blog-title"><h4>Lista de verificación del diseñador para cada proyecto UX/UI.</h4></a>
    										</div>
    									</div>
    									<a href="#" className="btn-four inverse rounded-circle"><i className="fa-thin fa-arrow-up-right"></i></a>
    								</div>

    							</article>

    						</div>
    						<div className="col-lg-4 col-md-6">
    							<article className="blog-meta-two tran3s position-relative z-1 mt-35 wow fadeInUp">
    								<figure className="post-img position-relative m0" style={{ backgroundImage: "url(images/blog/blog_img_04.jpg)" }}>
    									<a href="/blog_details" className="date">21 SEP</a>
    								</figure>
    								<div className="post-data">
    									<div className="post-info"><a href="/blog_details">Jubayer Hasan .</a> 8 min</div>
    									<div className="d-flex justify-content-between align-items-sm-center flex-wrap">
    										<a href="/blog_details" className="blog-title"><h4>Hábitos de Gasto, 13 Consejos para aumentar tu Dinero.</h4></a>
    										<a href="#" className="btn-four"><i className="bi bi-arrow-up-right"></i></a>
    									</div>
    								</div>
    								<div className="hover-content tran3s">
    									<a href="/blog_details" className="date">21 SEP</a>
    									<div className="post-data">
    										<div className="post-info"><a href="/blog_details">Jubayer Hasan .</a> 8 min</div>
    										<div className="d-flex justify-content-between align-items-sm-center flex-wrap">
    											<a href="/blog_details" className="blog-title"><h4>Hábitos de Gasto, 13 Consejos para aumentar tu Dinero.</h4></a>
    										</div>
    									</div>
    									<a href="#" className="btn-four inverse rounded-circle"><i className="fa-thin fa-arrow-up-right"></i></a>
    								</div>

    							</article>

    						</div>
    					</div>

    					<div className="section-btn text-center md-mt-60">
    						<a href="/blog_01" className="btn-eight"><span>Explorar Todo</span> <i className="bi bi-arrow-up-right"></i></a>
    					</div>
    				</div>
    			</div>
    		</div>





    		<div className="address-banner wow fadeInUp mt-120 lg-mt-80">
    			<div className="container container-large">
    				<div className="d-flex flex-wrap justify-content-center justify-content-lg-between">
    					<div className="block position-relative z-1 mt-25">
    						<div className="d-xl-flex align-items-center">
    							<div className="icon rounded-circle d-flex align-items-center justify-content-center"><img src="/images/lazy.svg" data-src="/images/icon/icon_39.svg" alt="" className="lazy-img" /></div>
    							<div className="text">
    								<p className="fs-22">Siempre estamos felices de ayudar.</p>
    								<a href="#" className="tran3s">hola@homerealestate.com</a>
    							</div>

    						</div>
    					</div>

    					<div className="block position-relative skew-line z-1 mt-25">
    						<div className="d-xl-flex align-items-center">
    							<div className="icon rounded-circle d-flex align-items-center justify-content-center"><img src="/images/lazy.svg" data-src="/images/icon/icon_39.svg" alt="" className="lazy-img" /></div>
    							<div className="text">
    								<p className="fs-22">Nuestro número de atención</p>
    								<a href="#" className="tran3s">+757 699 4478,</a>
    								<a href="#" className="tran3s">&nbsp; +991 377 9731</a>
    							</div>

    						</div>
    					</div>

    					<div className="block position-relative z-1 mt-25">
    						<div className="d-xl-flex align-items-center">
    							<div className="icon rounded-circle d-flex align-items-center justify-content-center"><img src="/images/lazy.svg" data-src="/images/icon/icon_39.svg" alt="" className="lazy-img" /></div>
    							<div className="text">
    								<p className="fs-22">Chat en vivo</p>
    								<a href="#" className="tran3s">www.homerealestate.com/live-chat</a>
    							</div>

    						</div>
    					</div>

    				</div>
    			</div>
    		</div>






    		<div className="fancy-banner-eight wow fadeInUp mt-160 xl-mt-120">
    			<div className="container container-large">
    				<div className="bg-wrapper bg-pink-two overflow-hidden position-relative z-1">
    					<div className="row align-items-end">
    						<div className="col-xl-6 col-lg-7 col-md-7">
    							<div className="pb-80 lg-pb-40">
    								<h3>Comienza tu Viaje como <span className="fw-normal fst-italic">Agente Inmobiliario.</span></h3>
    								<div className="d-inline-flex flex-wrap align-items-center position-relative mt-15">
    									<a href="/agent" className="btn-eight mt-10 me-4"><span>Conviértete en Agente</span></a>
    									<a href="/contact" className="btn-two rounded-0 border-0 mt-10"><span>Contáctanos</span></a>
    									<img src="/images/lazy.svg" data-src="/images/shape/shape_51.svg" alt="" className="lazy-img shapes shape_02 wow fadeInRight" />
    								</div>
    							</div>
    						</div>
    						<div className="col-xl-6 col-lg-5 col-md-5 text-center text-md-end">
    							<div className="media-wrapper position-relative z-1 d-inline-block">
    								<img src="/images/lazy.svg" data-src="/images/media/img_44.png" alt="" className="lazy-img" />
    								<img src="/images/lazy.svg" data-src="/images/shape/shape_50.svg" alt="" className="lazy-img shapes shape_01" />
    							</div>
    						</div>
    					</div>

    				</div>
    			</div>
    		</div>






    		<div className="footer-three">
    			<div className="container container-large">
    				<div className="bg-wrapper position-relative z-1">
    					<div className="row">
    						<div className="col-xl-3 mb-40 lg-mb-60">
    							<div className="footer-intro pe-xxl-5 pe-xl-3">
    								<div className="logo mb-15">
    									<a href="/">
    										<img src="/images/logo/logo.svg" alt="" />
    									</a>
    								</div> 

    								<p className="mb-45 lg-mb-30">11910 Clyde Rapid Suite 210, Wil, Virginia, EE. UU.</p>
    								<ul className="style-none d-flex align-items-center social-icon">
    									<li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
    									<li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
    									<li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
    								</ul>
    								<img src="/images/lazy.svg" data-src="/images/shape/shape_52.svg" alt="" className="lazy-img ms-auto d-none d-xl-block" />
    							</div>
    						</div>
    						<div className="col-lg-2 col-md-6 mb-30">
    							<div className="footer-nav">
    								<h5 className="footer-title">Enlaces</h5>
    								<ul className="footer-nav-link style-none">
    									<li><a href="/">Inicio</a></li>
    									<li><a href="/dashboard/membership" target="_blank" rel="noopener noreferrer">Membresía</a></li>
    									<li><a href="/about_us_01">Sobre la Empresa</a></li>
    									<li><a href="/blog_01">Blog</a></li>
    								</ul>
    							</div>
    						</div>
    						<div className="col-xl-2 col-lg-3 col-md-6 mb-30">
    							<div className="footer-nav">
    								<h5 className="footer-title">Nuevas Propiedades</h5>
    								<ul className="footer-nav-link style-none">
    									<li><a href="/listing_01">​Comprar Apartamentos</a></li>
    									<li><a href="/listing_02">Comprar Condominios</a></li>
    									<li><a href="/listing_03">Alquilar Casas</a></li>
    									<li><a href="/listing_04">Alquilar Industriales</a></li>
    									<li><a href="/listing_05">Comprar Villas</a></li>
    									<li><a href="/listing_06">Alquilar Oficinas</a></li>
    								</ul>
    							</div>
    						</div>
    						<div className="col-xl-2 col-lg-3 col-md-6 mb-30">
    							<div className="footer-nav">
    								<h5 className="footer-title">Legal</h5>
    								<ul className="footer-nav-link style-none">
    									<li><a href="/faq">Términos y condiciones</a></li>
    									<li><a href="/faq">Cookies</a></li>
    									<li><a href="/faq">Política de privacidad</a></li>
    									<li><a href="/faq">Preguntas frecuentes</a></li>
    								</ul>
    							</div>
    						</div>
    						<div className="col-xl-3 col-lg-4 col-md-6 mb-30">
    							<h5 className="footer-title">Boletines</h5>
    							<p className="pt-5">Únete y recibe noticias importantes regularmente</p>
    							<form action="#" className="newsletter-form position-relative">
    								<input type="email" placeholder="Ingresa tu correo" />
    								<button className="fw-500 fs-16 text-white tran3s">Enviar</button>
    							</form>
    							<span className="fs-14 opacity-75">Solo enviamos correos interesantes y relevantes.</span>
    						</div>
    					</div>
    				</div>

    				<div className="bottom-footer">
    					<div className="d-md-flex justify-content-center justify-content-md-between align-items-center">
    						<ul className="style-none bottom-nav d-flex justify-content-center">
    							<li><a href="/faq">Privacidad y Términos</a></li>
    							<li><a href="/contact">Contáctanos</a></li>
    						</ul>
    						<p className="mb-15 text-center text-lg-start fs-16 order-md-first">Copyright @2024 Home Real Estate.</p>
    					</div>
    				</div>
    			</div>
    		</div> 




            <div className="modal fade" id="loginModal" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-fullscreen modal-dialog-centered">
                    <div className="container">
                        <div className="user-data-form modal-content">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    						<div className="form-wrapper m-auto">
    							<ul className="nav nav-tabs w-100" role="tablist">
    								<li className="nav-item" role="presentation">
    									<button className="nav-link active" data-bs-toggle="tab" data-bs-target="#fc1" role="tab">Iniciar Sesión</button>
    								</li>
    								<li className="nav-item" role="presentation">
    									<button className="nav-link" data-bs-toggle="tab" data-bs-target="#fc2" role="tab">Registrarse</button>
    								</li>
    							</ul>
    							<div className="tab-content mt-30">
    								<div className="tab-pane show active" role="tabpanel" id="fc1">
    									<div className="text-center mb-20">
    										<h2>¡Bienvenido de nuevo!</h2>
    										<p className="fs-20 color-dark">¿Aún no tienes una cuenta? <a href="#">Regístrate</a></p>
    									</div>
    									<form action="#">
    										<div className="row">
    											<div className="col-12">
    												<div className="input-group-meta position-relative mb-25">
    													<label>Correo electrónico*</label>
    													<input type="email" placeholder="tucorreo@gmail.com" />
    												</div>
    											</div>
    											<div className="col-12">
    												<div className="input-group-meta position-relative mb-20">
    													<label>Contraseña*</label>
    													<input type="password" placeholder="Ingresa tu contraseña" className="pass_log_id" />
    													<span className="placeholder_icon"><span className="passVicon"><img src="/images/icon/icon_68.svg" alt="" /></span></span>
    												</div>
    											</div>
    											<div className="col-12">
    												<div className="agreement-checkbox d-flex justify-content-between align-items-center">
    													<div>
    														<input type="checkbox" id="remember" />
    														<label htmlFor="remember">Mantener sesión iniciada</label>
    													</div>
    													<a href="#">¿Olvidaste tu contraseña?</a>
    												</div> 
    											</div>
    											<div className="col-12">
    												<button className="btn-two w-100 text-uppercase d-block mt-20">Iniciar Sesión</button>
    											</div>
    										</div>
    									</form>
    								</div>

    								<div className="tab-pane" role="tabpanel" id="fc2">
    									<div className="text-center mb-20">
    										<h2>Registro</h2>
    										<p className="fs-20 color-dark">¿Ya tienes una cuenta? <a href="#">Iniciar Sesión</a></p>
    									</div>
    									<form action="#">
    										<div className="row">
    											<div className="col-12">
    												<div className="input-group-meta position-relative mb-25">
    													<label>Nombre*</label>
    													<input type="text" placeholder="Tu Nombre Completo" />
    												</div>
    											</div>
    											<div className="col-12">
    												<div className="input-group-meta position-relative mb-25">
    													<label>Correo electrónico*</label>
    													<input type="email" placeholder="tucorreo@gmail.com" />
    												</div>
    											</div>
    											<div className="col-12">
    												<div className="input-group-meta position-relative mb-20">
    													<label>Contraseña*</label>
    													<input type="password" placeholder="Ingresa tu contraseña" className="pass_log_id" />
    													<span className="placeholder_icon"><span className="passVicon"><img src="/images/icon/icon_68.svg" alt="" /></span></span>
    												</div>
    											</div>
    											<div className="col-12">
    												<div className="agreement-checkbox d-flex justify-content-between align-items-center">
    													<div>
    														<input type="checkbox" id="remember2" />
    														<label htmlFor="remember2">Al hacer clic en "Registrarse", aceptas los <a href="#">Términos y condiciones</a> y la <a href="#">Política de Privacidad</a></label>
    													</div>
    												</div> 
    											</div>
    											<div className="col-12">
    												<button className="btn-two w-100 text-uppercase d-block mt-20">Registrarse</button>
    											</div>
    										</div>
    									</form>
    								</div>

    							</div>

    							<div className="d-flex align-items-center mt-30 mb-10">
    								<div className="line"></div>
    								<span className="pe-3 ps-3 fs-6">O</span>
    								<div className="line"></div>
    							</div>
    							<div className="row">
    								<div className="col-sm-6">
    									<a href="#" className="social-use-btn d-flex align-items-center justify-content-center tran3s w-100 mt-10">
    										<img src="/images/icon/google.png" alt="" />
    										<span className="ps-3">Registrarse con Google</span>
    									</a>
    								</div>
    								<div className="col-sm-6">
    									<a href="#" className="social-use-btn d-flex align-items-center justify-content-center tran3s w-100 mt-10">
    										<img src="/images/icon/facebook.png" alt="" />
    										<span className="ps-3">Registrarse con Facebook</span>
    									</a>
    								</div>
    							</div>
    						</div>

                        </div>

                    </div>
                </div>
            </div>


    		<button className="scroll-top">
    			<i className="bi bi-arrow-up-short"></i>
    		</button>

    	</div>
    </TemplatePageShell>
  );
}