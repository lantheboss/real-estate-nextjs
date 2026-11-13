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
  "https://maps.google.com/maps/api/js",
  "/vendor/gmap.js",
  "/js/map-script.js",
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




    		<header className="theme-main-menu menu-overlay menu-style-one sticky-menu">
    			<div className="inner-content gap-one">
    				<div className="top-header position-relative">
    					<div className="d-flex align-items-center justify-content-between">
    						<div className="logo order-lg-0">
    							<a href="/" className="d-flex align-items-center">
    								<img src="/images/logo/logo.svg" alt="" />
    							</a>
    						</div>

    						<div className="right-widget ms-auto ms-lg-0 me-3 me-lg-0 order-lg-3">
    							<ul className="d-flex align-items-center style-none">
    								<li>
    									<a href="#" data-bs-toggle="modal" data-bs-target="#loginModal" className="btn-one"><i className="fa-regular fa-lock"></i> <span>Iniciar Sesión</span></a>
                                    </li>
    								<li className="d-none d-md-inline-block ms-3">
                                        <a href="/dashboard/add-property" className="btn-two" target="_blank" rel="noopener noreferrer"><span>Añadir Propiedad</span> <i className="fa-thin fa-arrow-up-right"></i></a>
                                    </li>
    							</ul>
    						</div>
    						<nav className="navbar navbar-expand-lg p0 order-lg-2">
    							<button className="navbar-toggler d-block d-lg-none" type="button" data-bs-toggle="collapse"
    								data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
    								aria-label="Toggle navigation">
    								<span></span>
    							</button>
    							<div className="collapse navbar-collapse" id="navbarNav">
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
    									<li className="d-md-none ps-2 pe-2 mt-20">
    										<a href="/dashboard/add-property" className="btn-two w-100" target="_blank" rel="noopener noreferrer"><span>Añadir Propiedad</span> <i className="fa-thin fa-arrow-up-right"></i></a>
    									</li>
    								</ul>
    							</div>
    						</nav>
    					</div>
    				</div> 
    			</div> 
    		</header> 





    		<div className="hero-banner-seven z-2 position-relative mt-120 lg-mt-100">
                <div id="google-map-area" className="h-100">
                    <div className="google-map-home" id="contact-google-map" data-map-lat="40.925372" data-map-lng="-74.276544" data-icon-path="images/home2/map-icon.png" data-map-title="Awesome Place" data-map-zoom="12"></div>
                </div>
    			<div className="search-wrapper-overlay z-3">
                    <div className="container container-large">
                        <div className="position-relative">
                            <div className="row">
                                <div className="col-12">
                                    <div className="search-wrapper-one layout-one position-relative">
                                        <nav className="search-filter-nav-one d-flex">
                                            <div className="nav nav-tabs border-0" role="tablist">
                                                <button className="nav-link active" id="buy-tab" data-bs-toggle="tab" data-bs-target="#buy" type="button" role="tab" aria-controls="buy" aria-selected="true">Comprar</button>
                                                <button className="nav-link" id="rent-tab" data-bs-toggle="tab" data-bs-target="#rent" type="button" role="tab" aria-controls="rent" aria-selected="false">Alquilar</button>
                                                <button className="nav-link" id="sell-tab" data-bs-toggle="tab" data-bs-target="#sell" type="button" role="tab" aria-controls="sell" aria-selected="false">Vender</button>
                                            </div>
                                        </nav>
                                        <div className="bg-wrapper border-0">
                                            <div className="tab-content">
                                                <div className="tab-pane show active" id="buy" role="tabpanel" aria-labelledby="buy-tab" tabIndex="0">
                                                    <form action="#">
                                                        <div className="row gx-0 align-items-center">
                                                            <div className="col-xxl-2 col-xl-3 col-lg-4">
                                                                <div className="input-box-one border-left">
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
                                                            <div className="col-xl-3 col-lg-4">
                                                                <div className="input-box-one border-left">
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
                                                            <div className="col-xl-3 col-lg-4">
                                                                <div className="input-box-one border-left border-lg-0">
                                                                    <div className="label">Rango de Precio</div>
                                                                    <select className="nice-select fw-normal">
                                                                        <option value="1">$10,000 - $200,000</option>
                                                                        <option value="2">$200,000 - $300,000</option>
                                                                        <option value="2">$300,000 - $400,000</option>
                                                                    </select>
                                                                </div>

                                                            </div>
                                                            <div className="col-xxl-4 col-xl-3">
                                                                <div className="input-box-one lg-mt-10">
                                                                    <div className="d-flex align-items-center justify-content-center">
                                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#advanceFilterModal" className="search-modal-btn tran3s text-uppercase fw-500 d-inline-flex align-items-center rounded-3 me-3">
                                                                            <span className="d-xl-none d-xxl-block">BÚSQUEDA Avanzada</span>
                                                                            <i className="fa-light fa-sliders-up"></i>
                                                                        </a>
                                                                        <button className="fw-500 text-uppercase tran3s search-btn-four rounded-3">
                                                                            <span>Buscar</span>
                                                                            <i className="fa-light fa-magnifying-glass"></i>
                                                                        </button>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="tab-pane" id="rent" role="tabpanel" aria-labelledby="rent-tab" tabIndex="0">
                                                    <form action="#">
                                                        <div className="row gx-0 align-items-center">
                                                            <div className="col-xxl-2 col-xl-3 col-lg-4">
                                                                <div className="input-box-one border-left">
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
                                                            <div className="col-xl-3 col-lg-4">
                                                                <div className="input-box-one border-left">
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
                                                            <div className="col-xl-3 col-lg-4">
                                                                <div className="input-box-one border-left border-lg-0">
                                                                    <div className="label">Rango de Precio</div>
                                                                    <select className="nice-select fw-normal">
                                                                        <option value="1">$10,000 - $200,000</option>
                                                                        <option value="2">$200,000 - $300,000</option>
                                                                        <option value="2">$300,000 - $400,000</option>
                                                                    </select>
                                                                </div>

                                                            </div>
                                                            <div className="col-xxl-4 col-xl-3">
                                                                <div className="input-box-one lg-mt-10">
                                                                    <div className="d-flex align-items-center justify-content-center">
                                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#advanceFilterModal" className="search-modal-btn tran3s text-uppercase fw-500 d-inline-flex align-items-center rounded-3 me-3">
                                                                            <span className="d-xl-none d-xxl-block">BÚSQUEDA Avanzada</span>
                                                                            <i className="fa-light fa-sliders-up"></i>
                                                                        </a>
                                                                        <button className="fw-500 text-uppercase tran3s search-btn-four rounded-3">
                                                                            <span>Buscar</span>
                                                                            <i className="fa-light fa-magnifying-glass"></i>
                                                                        </button>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="tab-pane" id="sell" role="tabpanel" aria-labelledby="sell-tab" tabIndex="0">
                                                    <form action="#">
                                                        <div className="row gx-0 align-items-center">
                                                            <div className="col-xxl-2 col-xl-3 col-lg-4">
                                                                <div className="input-box-one border-left">
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
                                                            <div className="col-xl-3 col-lg-4">
                                                                <div className="input-box-one border-left">
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
                                                            <div className="col-xl-3 col-lg-4">
                                                                <div className="input-box-one border-left border-lg-0">
                                                                    <div className="label">Rango de Precio</div>
                                                                    <select className="nice-select fw-normal">
                                                                        <option value="1">$10,000 - $200,000</option>
                                                                        <option value="2">$200,000 - $300,000</option>
                                                                        <option value="2">$300,000 - $400,000</option>
                                                                    </select>
                                                                </div>

                                                            </div>
                                                            <div className="col-xxl-4 col-xl-3">
                                                                <div className="input-box-one lg-mt-10">
                                                                    <div className="d-flex align-items-center justify-content-center">
                                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#advanceFilterModal" className="search-modal-btn tran3s text-uppercase fw-500 d-inline-flex align-items-center rounded-3 me-3">
                                                                            <span className="d-xl-none d-xxl-block">BÚSQUEDA Avanzada</span>
                                                                            <i className="fa-light fa-sliders-up"></i>
                                                                        </a>
                                                                        <button className="fw-500 text-uppercase tran3s search-btn-four rounded-3">
                                                                            <span>Buscar</span>
                                                                            <i className="fa-light fa-magnifying-glass"></i>
                                                                        </button>
                                                                    </div>
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
                </div>
    		</div>





    		<div className="category-section-one grey-bg pt-130 pb-110 xl-pb-80">
    			<div className="container container-large">
                    <div className="position-relative z-1">
                        <h4 className="mb-50 xl-mb-30 text-center text-md-start">Categorías Populares.</h4>
                        <div className="wrapper">
                            <ul className="d-flex flex-wrap justify-content-center justify-content-xxl-between style-none">
                                <li>
                                    <a href="/listing_01" className="d-flex align-items-center fw-500 tran3s">
                                        <img src="/images/lazy.svg" data-src="/images/icon/icon_15.svg" alt="" className="lazy-img invert" />
                                        <span>Centro Comercial</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/listing_01" className="d-flex align-items-center fw-500 tran3s">
                                        <img src="/images/lazy.svg" data-src="/images/icon/icon_16.svg" alt="" className="lazy-img invert" />
                                        <span>Apartamentos</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/listing_01" className="d-flex align-items-center fw-500 tran3s">
                                        <img src="/images/lazy.svg" data-src="/images/icon/icon_17.svg" alt="" className="lazy-img invert" />
                                        <span>Villa</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/listing_01" className="d-flex align-items-center fw-500 tran3s">
                                        <img src="/images/lazy.svg" data-src="/images/icon/icon_18.svg" alt="" className="lazy-img invert" />
                                        <span>Industria</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/listing_01" className="d-flex align-items-center fw-500 tran3s">
                                        <img src="/images/lazy.svg" data-src="/images/icon/icon_19.svg" alt="" className="lazy-img invert" />
                                        <span>Oficina</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/listing_01" className="d-flex align-items-center fw-500 tran3s">
                                        <img src="/images/lazy.svg" data-src="/images/icon/icon_20.svg" alt="" className="lazy-img invert" />
                                        <span>Médico</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/listing_01" className="d-flex align-items-center fw-500 tran3s">
                                        <img src="/images/lazy.svg" data-src="/images/icon/icon_21.svg" alt="" className="lazy-img invert" />
                                        <span>Casa</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/listing_01" className="d-flex align-items-center fw-500 tran3s">
                                        <img src="/images/lazy.svg" data-src="/images/icon/icon_22.svg" alt="" className="lazy-img invert" />
                                        <span>Loft</span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="section-btn text-center sm-mt-40">
                            <a href="/listing_01" className="btn-eleven"><span>Ver todas las categorías</span> <i className="bi bi-chevron-right"></i></a>
                        </div>

                    </div>
                </div>
    		</div>





    		<div className="block-feature-one mt-150 xl-mt-120">
    			<div className="container">
    				<div className="title-one text-center mb-50 xl-mb-30 lg-mb-20 wow fadeInUp">
    					<h3>Descubre las <span>ventajas <img src="/images/lazy.svg" data-src="/images/shape/title_shape_01.svg" alt="" className="lazy-img" /></span> de Home Real Estate</h3>
    					<p className="fs-24">Tu socio inmobiliario de confianza en cada transacción.</p>
    				</div>


    				<div className="row gx-xl-5">
    					<div className="col-md-4">
    						<div className="card-style-one text-center wow fadeInUp mt-40">
    							<img src="/images/lazy.svg" data-src="/images/icon/icon_01.svg" alt="" className="lazy-img m-auto icon" />
    							<div className="fs-16 text-uppercase fw-500 fs-text mt-35 md-mt-30 mb-20">Comprar una casa</div>
    							<p className="fs-24 ps-xxl-4 pe-xxl-4">Explora los más de 2 millones de hogares de Home Real Estate y descubre tu espacio ideal para vivir.</p>
    						</div>

    					</div>
    					<div className="col-md-4">
    						<div className="card-style-one text-center wow fadeInUp mt-40" data-wow-delay="0.1s">
    							<img src="/images/lazy.svg" data-src="/images/icon/icon_02.svg" alt="" className="lazy-img m-auto icon" />
    							<div className="fs-16 text-uppercase fw-500 fs-text mt-35 md-mt-30 mb-20">Alquilar una casa</div>
    							<p className="fs-24 ps-xxl-3 pe-xxl-3">Descubre un alquiler que te encantará en Home Real Estate, gracias a más de 35 filtros y palabras clave adaptadas.</p>
    						</div>

    					</div>
    					<div className="col-md-4">
    						<div className="card-style-one text-center wow fadeInUp mt-40" data-wow-delay="0.2s">
    							<img src="/images/lazy.svg" data-src="/images/icon/icon_03.svg" alt="" className="lazy-img m-auto icon" />
    							<div className="fs-16 text-uppercase fw-500 fs-text mt-35 md-mt-30 mb-20">Vender una propiedad</div>
    							<p className="fs-24 ps-xxl-4 pe-xxl-4">Publica, vende y prospera con nuestra excelente agencia inmobiliaria. Es muy fácil y divertido.</p>
    						</div>

    					</div>
    				</div>
    			</div>
    		</div>





            <div className="video-banner-one mt-150 xl-mt-120 md-mt-80">
                <div className="container">
                    <div className="bg-wrapper position-relative z-1 overflow-hidden d-flex align-items-center justify-content-center" style={{ backgroundImage: "url(images/media/img_50.jpg)" }}>
                        <a className="fancybox video-icon d-flex align-items-center justify-content-center rounded-circle tran3s" data-fancybox="" href="https://www.youtube.com/embed/aXFSJTjVjw0" tabIndex="-1">
                            <i className="fa-solid fa-play"></i>
                        </a>
                    </div>

                </div>
            </div>






    		<div className="block-feature-three mt-150 xl-mt-120">
    			<div className="container">
    				<div className="position-relative z-1">
    					<div className="title-one text-center mb-75 xl-mb-50 md-mb-30 wow fadeInUp">
    						<h3>Explora <span>Ubicaciones <img src="/images/lazy.svg" data-src="/images/shape/title_shape_02.svg" alt="" className="lazy-img" /></span>Populares</h3>
    						<p className="fs-22">Explora los últimos anuncios y proyectos en diversas áreas</p>
    					</div>


    					<div className="property-location-slider-one">
    						<div className="item">
    							<div className="location-card-one position-relative z-1 d-flex align-items-end" style={{ backgroundImage: "url(images/media/img_05.jpg)" }}>
    								<div className="content text-center w-100 tran3s">
    									<h5 className="text-white fw-normal">Kelowna</h5>
    									<p className="text-white fw-light">1,230 Propiedades</p>
    								</div>
    								<a href="/listing_01" className="stretched-link"></a>
    							</div>

    						</div>
    						<div className="item">
    							<div className="location-card-one position-relative z-1 d-flex align-items-end" style={{ backgroundImage: "url(images/media/img_06.jpg)" }}>
    								<div className="content text-center w-100 tran3s">
    									<h5 className="text-white fw-normal">California</h5>
    									<p className="text-white fw-light">1,190 Propiedades</p>
    								</div>
    								<a href="/listing_01" className="stretched-link"></a>
    							</div>

    						</div>
    						<div className="item">
    							<div className="location-card-one position-relative z-1 d-flex align-items-end" style={{ backgroundImage: "url(images/media/img_07.jpg)" }}>
    								<div className="content text-center w-100 tran3s">
    									<h5 className="text-white fw-normal">Nueva York</h5>
    									<p className="text-white fw-light">1,710 Propiedades</p>
    								</div>
    								<a href="/listing_01" className="stretched-link"></a>
    							</div>

    						</div>
    						<div className="item">
    							<div className="location-card-one position-relative z-1 d-flex align-items-end" style={{ backgroundImage: "url(images/media/img_08.jpg)" }}>
    								<div className="content text-center w-100 tran3s">
    									<h5 className="text-white fw-normal">Miami</h5>
    									<p className="text-white fw-light">670 Propiedades</p>
    								</div>
    								<a href="/listing_01" className="stretched-link"></a>
    							</div>

    						</div>
    						<div className="item">
    							<div className="location-card-one position-relative z-1 d-flex align-items-end" style={{ backgroundImage: "url(images/media/img_09.jpg)" }}>
    								<div className="content text-center w-100 tran3s">
    									<h5 className="text-white fw-normal">Dhaka</h5>
    									<p className="text-white fw-light">1,670 Propiedades</p>
    								</div>
    								<a href="/listing_01" className="stretched-link"></a>
    							</div>

    						</div>
    					</div>
    					<ul className="slider-arrows slick-arrow-one d-flex justify-content-between style-none">
    						<li className="prev_a slick-arrow"><i className="fa-sharp fa-light fa-angle-left"></i></li>
    						<li className="next_a slick-arrow"><i className="fa-sharp fa-light fa-angle-right"></i></li>
    					</ul>
    				</div>
    			</div>
    		</div>





    		<div className="property-listing-four bg-pink-three position-relative z-1  pt-120 xl-pt-80 pb-110 xl-pb-60 mt-170 xl-mt-140 lg-mt-120">
    			<div className="container container-large">
    				<div className="position-relative z-1">
    					<div className="title-one mb-60 lg-mb-40 wow fadeInUp">
    						<h3>Nuevas <span>Propiedades <img src="/images/lazy.svg" data-src="/images/shape/title_shape_03.svg" alt="" className="lazy-img" /></span></h3>
    						<p className="fs-22 mt-xs">Explora las últimas propiedades en venta y destacadas.</p>
    					</div>


    					<div className="listing-slider-one vw-100">
    						<div className="item">
    							<div className="listing-card-one style-three border-30 mb-50">
    								<div className="img-gallery p-15">
    									<div className="position-relative border-20 overflow-hidden">
    										<div className="tag bg-white text-dark fw-500 border-20">EN ALQUILER</div>
    										<img src="/images/listing/img_13.jpg" className="w-100 border-20" alt="..." />
    										<a href="/listing_details_04" className="btn-four inverse rounded-circle position-absolute"><i className="bi bi-arrow-up-right"></i></a>
    										<div className="img-slider-btn">
    											03 <i className="fa-regular fa-image"></i>
    											<a href="/images/listing/img_large_01.jpg" className="d-block" data-fancybox="img1" data-caption="Villa Blueberry"></a>
    											<a href="/images/listing/img_large_02.jpg" className="d-block" data-fancybox="img1" data-caption="Villa Blueberry"></a>
    											<a href="/images/listing/img_large_03.jpg" className="d-block" data-fancybox="img1" data-caption="Villa Blueberry"></a>
    										</div>
    									</div>
    								</div>

    								<div className="property-info pe-4 ps-4">
    									<a href="/listing_details_04" className="title tran3s">Villa Blueberry.</a>
    									<div className="address">Mirpur 10, Estadio Dhaka 1208</div>
    									<ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between">
    										<li className="d-flex align-items-center">
    											<span className="fs-16"><strong className="fw-500 color-dark">1780</strong> m²</span>
    										</li>
    										<li className="d-flex align-items-center">
    											<span className="fs-16"><strong className="fw-500 color-dark">03</strong> hab</span>
    										</li>
    										<li className="d-flex align-items-center">
    											<span className="fs-16"><strong className="fw-500 color-dark">02</strong> baños</span>
    										</li>
    									</ul>
    									<div className="pl-footer top-border d-flex align-items-center justify-content-between">
    										<strong className="price fw-500 color-dark">$34,900</strong>
    										<ul className="style-none d-flex action-icons">
    											<li><a href="#"><i className="fa-light fa-heart"></i></a></li>
    											<li><a href="#"><i className="fa-light fa-bookmark"></i></a></li>
    											<li><a href="#"><i className="fa-light fa-circle-plus"></i></a></li>
    										</ul>
    									</div>
    								</div>

    							</div>

    						</div>
    						<div className="item">
    							<div className="listing-card-one style-three border-30 mb-50">
    								<div className="img-gallery p-15">
    									<div className="position-relative border-20 overflow-hidden">
    										<div className="tag bg-white text-dark fw-500 border-20">EN VENTA</div>
    										<img src="/images/listing/img_14.jpg" className="w-100 border-20" alt="..." />
    										<a href="/listing_details_04" className="btn-four inverse rounded-circle position-absolute"><i className="bi bi-arrow-up-right"></i></a>
    										<div className="img-slider-btn">
    											03 <i className="fa-regular fa-image"></i>
    											<a href="/images/listing/img_large_04.jpg" className="d-block" data-fancybox="img2" data-caption="Villa White House"></a>
    											<a href="/images/listing/img_large_05.jpg" className="d-block" data-fancybox="img2" data-caption="Villa White House"></a>
    											<a href="/images/listing/img_large_06.jpg" className="d-block" data-fancybox="img2" data-caption="Villa White House"></a>
    										</div>
    									</div>
    								</div>

    								<div className="property-info pe-4 ps-4">
    									<a href="/listing_details_04" className="title tran3s">Villa White House</a>
    									<div className="address">California link road, ca, usa</div>
    									<ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between">
    										<li className="d-flex align-items-center">
    											<span className="fs-16"><strong className="fw-500 color-dark">2340</strong> m²</span>
    										</li>
    										<li className="d-flex align-items-center">
    											<span className="fs-16"><strong className="fw-500 color-dark">04</strong> hab</span>
    										</li>
    										<li className="d-flex align-items-center">
    											<span className="fs-16"><strong className="fw-500 color-dark">03</strong> baños</span>
    										</li>
    									</ul>
    									<div className="pl-footer top-border d-flex align-items-center justify-content-between">
    										<strong className="price fw-500 color-dark">$28,100</strong>
    										<ul className="style-none d-flex action-icons">
    											<li><a href="#"><i className="fa-light fa-heart"></i></a></li>
    											<li><a href="#"><i className="fa-light fa-bookmark"></i></a></li>
    											<li><a href="#"><i className="fa-light fa-circle-plus"></i></a></li>
    										</ul>
    									</div>
    								</div>

    							</div>

    						</div>
    						<div className="item">
    							<div className="listing-card-one style-three border-30 mb-50">
    								<div className="img-gallery p-15">
    									<div className="position-relative border-20 overflow-hidden">
    										<div className="tag bg-white text-dark fw-500 border-20">EN VENTA</div>
    										<img src="/images/listing/img_15.jpg" className="w-100 border-20" alt="..." />
    										<a href="/listing_details_04" className="btn-four inverse rounded-circle position-absolute"><i className="bi bi-arrow-up-right"></i></a>
    										<div className="img-slider-btn">
    											04 <i className="fa-regular fa-image"></i>
    											<a href="/images/listing/img_large_01.jpg" className="d-block" data-fancybox="img3" data-caption="Villa de lujo en el lago Dal."></a>
    											<a href="/images/listing/img_large_05.jpg" className="d-block" data-fancybox="img3" data-caption="Villa de lujo en el lago Dal."></a>
    											<a href="/images/listing/img_large_03.jpg" className="d-block" data-fancybox="img3" data-caption="Villa de lujo en el lago Dal."></a>
    											<a href="/images/listing/img_large_02.jpg" className="d-block" data-fancybox="img3" data-caption="Villa de lujo en el lago Dal."></a>
    										</div>
    									</div>
    								</div>

    								<div className="property-info pe-4 ps-4">
    									<a href="/listing_details_04" className="title tran3s">Villa de lujo en el lago Dal.</a>
    									<div className="address">Mirpur 10, Estadio</div>
    									<ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between">
    										<li className="d-flex align-items-center">
    											<span className="fs-16"><strong className="fw-500 color-dark">1857</strong> m²</span>
    										</li>
    										<li className="d-flex align-items-center">
    											<span className="fs-16"><strong className="fw-500 color-dark">03</strong> hab</span>
    										</li>
    										<li className="d-flex align-items-center">
    											<span className="fs-16"><strong className="fw-500 color-dark">01</strong> baños</span>
    										</li>
    									</ul>
    									<div className="pl-footer top-border d-flex align-items-center justify-content-between">
    										<strong className="price fw-500 color-dark">$42,500</strong>
    										<ul className="style-none d-flex action-icons">
    											<li><a href="#"><i className="fa-light fa-heart"></i></a></li>
    											<li><a href="#"><i className="fa-light fa-bookmark"></i></a></li>
    											<li><a href="#"><i className="fa-light fa-circle-plus"></i></a></li>
    										</ul>
    									</div>
    								</div>

    							</div>

    						</div>
    						<div className="item">
    							<div className="listing-card-one style-three border-30 mb-50">
    								<div className="img-gallery p-15">
    									<div className="position-relative border-20 overflow-hidden">
    										<div className="tag bg-white text-dark fw-500 border-20">EN VENTA</div>
    										<img src="/images/listing/img_16.jpg" className="w-100 border-20" alt="..." />
    										<a href="/listing_details_04" className="btn-four inverse rounded-circle position-absolute"><i className="bi bi-arrow-up-right"></i></a>
    										<div className="img-slider-btn">
    											04 <i className="fa-regular fa-image"></i>
    											<a href="/images/listing/img_large_04.jpg" className="d-block" data-fancybox="img4" data-caption="Casa South Sun"></a>
    											<a href="/images/listing/img_large_06.jpg" className="d-block" data-fancybox="img4" data-caption="Casa South Sun"></a>
    											<a href="/images/listing/img_large_03.jpg" className="d-block" data-fancybox="img4" data-caption="Casa South Sun"></a>
    											<a href="/images/listing/img_large_02.jpg" className="d-block" data-fancybox="img4" data-caption="Casa South Sun"></a>
    										</div>
    									</div>
    								</div>

    								<div className="property-info pe-4 ps-4">
    									<a href="/listing_details_04" className="title tran3s">Casa South Sun</a>
    									<div className="address">Mirpur 10, Estadio</div>
    									<ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between">
    										<li className="d-flex align-items-center">
    											<span className="fs-16"><strong className="fw-500 color-dark">2450</strong> m²</span>
    										</li>
    										<li className="d-flex align-items-center">
    											<span className="fs-16"><strong className="fw-500 color-dark">04</strong> hab</span>
    										</li>
    										<li className="d-flex align-items-center">
    											<span className="fs-16"><strong className="fw-500 color-dark">03</strong> baños</span>
    										</li>
    									</ul>
    									<div className="pl-footer top-border d-flex align-items-center justify-content-between">
    										<strong className="price fw-500 color-dark">$55,500</strong>
    										<ul className="style-none d-flex action-icons">
    											<li><a href="#"><i className="fa-light fa-heart"></i></a></li>
    											<li><a href="#"><i className="fa-light fa-bookmark"></i></a></li>
    											<li><a href="#"><i className="fa-light fa-circle-plus"></i></a></li>
    										</ul>
    									</div>
    								</div>

    							</div>

    						</div>
    						<div className="item">
    							<div className="listing-card-one style-three border-30 mb-50">
    								<div className="img-gallery p-15">
    									<div className="position-relative border-20 overflow-hidden">
    										<div className="tag bg-white text-dark fw-500 border-20">EN VENTA</div>
    										<img src="/images/listing/img_14.jpg" className="w-100 border-20" alt="..." />
    										<a href="/listing_details_04" className="btn-four inverse rounded-circle position-absolute"><i className="bi bi-arrow-up-right"></i></a>
    										<div className="img-slider-btn">
    											03 <i className="fa-regular fa-image"></i>
    											<a href="/images/listing/img_large_04.jpg" className="d-block" data-fancybox="img5" data-caption="Villa White House"></a>
    											<a href="/images/listing/img_large_05.jpg" className="d-block" data-fancybox="img5" data-caption="Villa White House"></a>
    											<a href="/images/listing/img_large_06.jpg" className="d-block" data-fancybox="img5" data-caption="Villa White House"></a>
    										</div>
    									</div>
    								</div>

    								<div className="property-info pe-4 ps-4">
    									<a href="/listing_details_04" className="title tran3s">Villa White House</a>
    									<div className="address">California link road, ca, usa</div>
    									<ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between">
    										<li className="d-flex align-items-center">
    											<span className="fs-16"><strong className="fw-500 color-dark">2340</strong> m²</span>
    										</li>
    										<li className="d-flex align-items-center">
    											<span className="fs-16"><strong className="fw-500 color-dark">04</strong> hab</span>
    										</li>
    										<li className="d-flex align-items-center">
    											<span className="fs-16"><strong className="fw-500 color-dark">03</strong> baños</span>
    										</li>
    									</ul>
    									<div className="pl-footer top-border d-flex align-items-center justify-content-between">
    										<strong className="price fw-500 color-dark">$28,100</strong>
    										<ul className="style-none d-flex action-icons">
    											<li><a href="#"><i className="fa-light fa-heart"></i></a></li>
    											<li><a href="#"><i className="fa-light fa-bookmark"></i></a></li>
    											<li><a href="#"><i className="fa-light fa-circle-plus"></i></a></li>
    										</ul>
    									</div>
    								</div>

    							</div>

    						</div>
    					</div>
    					<div className="section-btn text-center">
    						<a href="/listing_04" className="btn-eleven fst-italic"><span>Ver todas las propiedades</span></a>
    					</div>
    					<ul className="slider-arrows slick-arrow-two d-flex justify-content-center style-none md-mt-30">
    						<li className="prev_b slick-arrow"><i className="bi bi-arrow-left"></i></li>
    						<li className="next_b slick-arrow"><i className="bi bi-arrow-right"></i></li>
    					</ul>
    				</div>
    			</div>
    		</div>




    		<div className="fancy-banner-one position-relative z-1 pt-160 xl-pt-140 lg-pt-80 pb-140 xl-pb-120 lg-pb-100">
    			<div className="container">
    				<div className="row">
    					<div className="col-lg-6 wow fadeInLeft">
    						<div className="title-one mb-45 lg-mb-30">
    							<h3 className="text-white">Oferta <span>Mensual <img src="/images/lazy.svg" data-src="/images/shape/title_shape_04.svg" alt="" className="lazy-img" /></span>Exclusiva para ti.</h3>
    							<p className="fs-24 text-white pe-xl-5 me-xxl-5">No te pierdas esta oferta mensual exclusiva y personalizada para ti.</p>
    						</div>

    						<a href="/listing_details_02" className="btn-six">Más Detalles</a>
    					</div>
    					<div className="col-lg-6 wow fadeInRight">
    						<div className="property-item md-mt-60 position-relative z-1">
    							<div className="row gx-0">
    								<div className="col-md-5 d-flex">
    									<div className="gutter border-right w-100 h-100">
    										<div className="tag mb-20">EN VENTA</div>
    										<h4 className="mb-70 sm-mb-40">Villa de lujo fisa orkit.</h4>
    										<ul className="style-none d-flex action-icons">
    											<li><a href="#"><i className="fa-light fa-heart"></i></a></li>
    											<li><a href="#"><i className="fa-light fa-bookmark"></i></a></li>
    											<li><a href="#"><i className="fa-light fa-circle-plus"></i></a></li>
    										</ul>
    									</div>

    								</div>
    								<div className="col-md-7 d-flex">
    									<div className="gutter w-100 h-100">
    										<p>Mirpur 10, Estadio Nacional, 1210, Dhaka, BD</p>
    										<h2 className="price text-center">$28,100.00</h2>
    										<ul className="style-none d-flex feature">
    											<li>
    												<strong className="d-block color-dark fw-500 fs-20">2137</strong>
    												<span className="fs-16">m²</span>
    											</li>
    											<li className="text-center">
    												<strong className="d-block color-dark fw-500 fs-20">03</strong>
    												<span className="fs-16">hab</span>
    											</li>
    											<li className="text-end">
    												<strong className="d-block color-dark fw-500 fs-20">02</strong>
    												<span className="fs-16">baños</span>
    											</li>
    										</ul>
    									</div>

    								</div>
    							</div>
    							<div className="button-group gutter d-flex justify-content-between align-items-center">
    								<a href="/listing_details_02" className="btn-three"><span>Ver Detalles Completos</span></a>
    								<a href="/listing_details_02" className="btn-four rounded-circle"><i className="bi bi-arrow-up-right"></i></a>
    							</div>
    						</div>

    					</div>
    				</div>
    			</div>
    		</div>






    		<div className="feedback-section-four position-relative overflow-hidden z-1 pt-150 lg-pt-120">
    			<div className="container">
    				<div className="position-relative z-1">
    					<div className="row">
    						<div className="col-xl-6 col-lg-8">
    							<div className="title-one pe-xxl-5 mb-75 xl-mb-50 wow fadeInUp">
    								<h3>Feedback de <span>Clientes <img src="/images/lazy.svg" data-src="/images/shape/title_shape_01.svg" alt="" className="lazy-img" /></span></h3>
    						        <p className="fs-20 mt-xs">La satisfacción del cliente habla más fuerte que nuestras palabras. Escúchalos.</p>
    							</div>

    						</div>
    					</div>

    					<div className="feedback-slider-two">
    						<div className="item">
    							<div className="feedback-block-four ps-lg-4 pe-lg-4">
    								<div className="d-flex align-items-center">
    									<img src="/images/media/img_01.jpg" alt="" className="rounded-circle avatar" />
    									<div className="ps-3">
    										<h6 className="fs-20 m0">Rashed Kabir</h6>
    										<span className="fs-16">Milán, Italia</span>
    									</div>
    								</div>
    								<blockquote>"Servicio eficiente y amable, nos guiaron perfectamente. Satisfechos con nuestro nuevo hogar. ¡Gracias!"</blockquote>
    								<ul className="rating style-none d-flex">
    									<li><i className="fa-sharp fa-solid fa-star"></i></li>
    									<li><i className="fa-sharp fa-solid fa-star"></i></li>
    									<li><i className="fa-sharp fa-solid fa-star"></i></li>
    									<li><i className="fa-sharp fa-solid fa-star"></i></li>
    									<li><i className="fa-sharp fa-solid fa-star"></i></li>
    								</ul>
    								<img src="/images/icon/icon_29.svg" alt="" className="icon" />
    							</div>

    						</div>
    						<div className="item">
    							<div className="feedback-block-four ps-lg-4 pe-lg-4">
    								<div className="d-flex align-items-center">
    									<img src="/images/media/img_02.jpg" alt="" className="rounded-circle avatar" />
    									<div className="ps-3">
    										<h6 className="fs-20 m0">Jannat Ferdu.</h6>
    										<span className="fs-16">Londres, Reino Unido</span>
    									</div>
    								</div>
    								<blockquote>"Encontramos la casa de nuestros sueños. Excelente negocio con ellos. Gracias por el excelente servicio."</blockquote>
    								<ul className="rating style-none d-flex">
    									<li><i className="fa-sharp fa-solid fa-star"></i></li>
    									<li><i className="fa-sharp fa-solid fa-star"></i></li>
    									<li><i className="fa-sharp fa-solid fa-star"></i></li>
    									<li><i className="fa-sharp fa-solid fa-star"></i></li>
    									<li><i className="fa-sharp fa-solid fa-star"></i></li>
    								</ul>
    								<img src="/images/icon/icon_29.svg" alt="" className="icon" />
    							</div>

    						</div>
    						<div className="item">
    							<div className="feedback-block-four ps-lg-4 pe-lg-4">
    								<div className="d-flex align-items-center">
    									<img src="/images/media/img_03.jpg" alt="" className="rounded-circle avatar" />
    									<div className="ps-3">
    										<h6 className="fs-20 m0">Jubayer Hasan</h6>
    										<span className="fs-16">Miami, EE. UU.</span>
    									</div>
    								</div>
    								<blockquote>"Servicio eficiente y amable, nos guiaron perfectamente. Satisfechos con nuestro nuevo hogar. ¡Gracias!"</blockquote>
    								<ul className="rating style-none d-flex">
    									<li><i className="fa-sharp fa-solid fa-star"></i></li>
    									<li><i className="fa-sharp fa-solid fa-star"></i></li>
    									<li><i className="fa-sharp fa-solid fa-star"></i></li>
    									<li><i className="fa-sharp fa-solid fa-star"></i></li>
    									<li><i className="fa-sharp fa-solid fa-star"></i></li>
    								</ul>
    								<img src="/images/icon/icon_29.svg" alt="" className="icon" />
    							</div>

    						</div>
    						<div className="item">
    							<div className="feedback-block-four ps-lg-4 pe-lg-4">
    								<div className="d-flex align-items-center">
    									<img src="/images/media/img_02.jpg" alt="" className="rounded-circle avatar" />
    									<div className="ps-3">
    										<h6 className="fs-20 m0">Jannat Ferdu.</h6>
    										<span className="fs-16">Londres, Reino Unido</span>
    									</div>
    								</div>
    								<blockquote>"Encontramos la casa de nuestros sueños. Excelente negocio con ellos. Gracias por el excelente servicio."</blockquote>
    								<ul className="rating style-none d-flex">
    									<li><i className="fa-sharp fa-solid fa-star"></i></li>
    									<li><i className="fa-sharp fa-solid fa-star"></i></li>
    									<li><i className="fa-sharp fa-solid fa-star"></i></li>
    									<li><i className="fa-sharp fa-solid fa-star"></i></li>
    									<li><i className="fa-sharp fa-solid fa-star"></i></li>
    								</ul>
    								<img src="/images/icon/icon_29.svg" alt="" className="icon" />
    							</div>

    						</div>
    					</div>
    					<ul className="slider-arrows slick-arrow-two d-flex justify-content-center style-none md-mt-30">
    						<li className="prev_c slick-arrow"><i className="bi bi-arrow-left"></i></li>
    						<li className="next_c slick-arrow"><i className="bi bi-arrow-right"></i></li>
    					</ul>
    					<div className="section-btn text-center md-mt-30">
    						<a href="#" className="btn-eleven fst-italic"><span>Ver todos los comentarios</span></a>
    					</div>
    				</div>
    			</div>
    		</div>






    		<div className="blog-section-one mt-150 xl-mt-120">
    			<div className="container">
    				<div className="position-relative">
    					<div className="title-one mb-35 xl-mb-20 md-mb-10 wow fadeInUp">
    						<h3>Últimas <span>Noticias <img src="/images/lazy.svg" data-src="/images/shape/title_shape_01.svg" alt="" className="lazy-img" /></span></h3>
    						<p className="fs-20 mt-xs">Obtén las últimas actualizaciones, consejos y trucos de nuestros expertos.</p>
    					</div>


    					<div className="row gx-xl-5">
    						<div className="col-md-6">
    							<article className="blog-meta-one mt-35 wow fadeInUp">
    								<figure className="post-img position-relative rounded-5 m0" style={{ backgroundImage: "url(images/blog/blog_img_01.jpg)" }}>
    									<a href="/blog_details" className="stretched-link date rounded-5 tran3s">09 FEB</a>
    								</figure>
    								<div className="post-data">
    									<div className="post-info"><a href="/blog_details">Rashed Ka .</a> 6 min</div>
    									<div className="d-flex justify-content-between align-items-sm-center flex-wrap">
    										<a href="/blog_details" className="blog-title"><h4>Hábitos de Gasto, 13 Consejos para aumentar tu Dinero.</h4></a>
    										<a href="/blog_details" className="read-btn d-flex align-items-center justify-content-center tran3s rounded-circle"><i className="bi bi-arrow-up-right"></i></a>
    									</div>

    								</div>
    							</article>

    						</div>
    						<div className="col-md-6">
    							<article className="blog-meta-one mt-35 wow fadeInUp" data-wow-delay="0.1s">
    								<figure className="post-img position-relative rounded-5 m0" style={{ backgroundImage: "url(images/blog/blog_img_02.jpg)" }}>
    									<a href="/blog_details" className="stretched-link date rounded-5 tran3s">12 ago</a>
    								</figure>
    								<div className="post-data">
    									<div className="post-info"><a href="/blog_details">Jubayer Hasan .</a> 7 min</div>
    									<div className="d-flex justify-content-between align-items-sm-center flex-wrap">
    										<a href="/blog_details" className="blog-title"><h4>Lista de verificación del diseñador para cada proyecto UX/UI.</h4></a>
    										<a href="/blog_details" className="read-btn d-flex align-items-center justify-content-center tran3s rounded-circle"><i className="bi bi-arrow-up-right"></i></a>
    									</div>

    								</div>
    							</article>

    						</div>
    					</div>

    					<div className="section-btn text-center md-mt-60">
    						<a href="/blog_03" className="btn-eight rounded-3"><span>Explorar Todo</span> <i className="bi bi-arrow-up-right"></i></a>
    					</div>
    				</div>
    			</div>
    		</div>





    		<div className="fancy-banner-eight wow fadeInUp mt-160 xl-mt-100">
    			<div className="container container-large">
    				<div className="bg-wrapper border-30 bg-pink-two overflow-hidden position-relative z-1">
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





    		<div className="footer-four position-relative z-1">
    			<div className="container container-large">
    				<div className="bg-wrapper position-relative z-1">
    					<div className="row">
    						<div className="col-xxl-3 col-lg-4 mb-60">
    							<div className="footer-intro">
    								<div className="logo mb-20">
    									<a href="/">
    										<img src="/images/logo/logo.svg" alt="" />
    									</a>
    								</div> 

    								<p className="mb-30 xs-mb-20">11910 Clyde Rapid Suite 210, Willyand, Virginia, EE. UU.</p>
    								<a href="#" className="email tran3s mb-60 md-mb-30">hola@homerealestate.com</a>
    								<ul className="style-none d-flex align-items-center social-icon">
    									<li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
    									<li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
    									<li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
    								</ul>
    							</div>
    						</div>
    						<div className="col-lg-3 col-sm-4 ms-auto mb-30">
    							<div className="footer-nav ps-xl-5">
    								<h5 className="footer-title">Enlaces</h5>
    								<ul className="footer-nav-link style-none">
    									<li><a href="/">Inicio</a></li>
    									<li><a href="/dashboard/membership" target="_blank" rel="noopener noreferrer">Membresía</a></li>
    									<li><a href="/about_us_01">Sobre la Empresa</a></li>
    									<li><a href="/blog_01">Blog</a></li>
    									<li><a href="/blog_02">Explorar Empleos</a></li>
    									<li><a href="/pricing_02">Precios</a></li>
    									<li><a href="/dashboard/dashboard-index" target="_blank" rel="noopener noreferrer">Panel de Control</a></li>
    								</ul>
    							</div>
    						</div>
    						<div className="col-lg-3 col-sm-4 mb-30">
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
    						<div className="col-lg-2 col-sm-4 mb-30">
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
    					</div>
    				</div>

    				<div className="bottom-footer">
    					<p className="m0 text-center fs-16">Copyright @2024 Home Real Estate.</p>
    				</div>
    			</div>
    			<img src="/images/lazy.svg" data-src="/images/assets/ils_06.svg" alt="" className="lazy-img shapes shape_01" />
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



            <div className="modal fade" id="advanceFilterModal" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 m-auto">
                                <div className="modal-content">
                                    <button type="button" className="btn-close ms-auto mt-20 me-4" data-bs-dismiss="modal" aria-label="Close"><i className="fa-regular fa-xmark"></i></button>
                                    <div className="advance-search-panel">
                                        <div className="main-bg border-0">
                                            <form action="#">
                                                <div className="row gx-lg-5">
                                                    <div className="col-md-6">
                                                        <div className="input-box-one mb-35">
                                                            <div className="label">Busco...</div>
                                                            <select className="nice-select fw-normal">
                                                                <option value="1">Comprar Apartamentos</option>
                                                                <option value="2">Alquilar Condominios</option>
                                                                <option value="3">Vender Casas</option>
                                                                <option value="4">Alquilar Industriales</option>
                                                                <option value="6">Vender Villas</option>
                                                            </select>
                                                        </div>

                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="input-box-one mb-35">
                                                            <div className="label">Ubicación</div>
                                                            <select className="nice-select location fw-normal">
                                                                <option value="1">Washington DC</option>
                                                                <option value="2">Acapulco, México</option>
                                                                <option value="3">Berlín, Alemania</option>
                                                                <option value="4">Cannes, Francia</option>
                                                                <option value="5">Delhi, India</option>
                                                                <option value="6">Giza, Egipto </option>
                                                                <option value="7">La Habana, Cuba</option>
                                                            </select>
                                                        </div>

                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="input-box-one mb-35">
                                                            <div className="label">Palabra clave</div>
                                                            <input type="text" placeholder="comprar, casa, loft, apartamento" className="type-input" />
                                                        </div>

                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="input-box-one mb-35">
                                                            <div className="label">ID de Propiedad</div>
                                                            <input type="text" placeholder="EM45203014" className="type-input" />
                                                        </div>

                                                    </div>

                                                    <div className="col-lg-6">
                                                        <div className="input-box-one mb-40">
                                                            <div className="label">Habitaciones</div>
                                                            <select className="nice-select fw-normal">
                                                                <option value="1">3+</option>
                                                                <option value="2">4+</option>
                                                                <option value="3">2+</option>
                                                                <option value="4">1+</option>
                                                            </select>
                                                        </div>

                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="input-box-one mb-40">
                                                            <div className="label">Baños</div>
                                                            <select className="nice-select fw-normal">
                                                                <option value="1">2+</option>
                                                                <option value="2">4+</option>
                                                                <option value="3">3+</option>
                                                                <option value="4">1+</option>
                                                            </select>
                                                        </div>

                                                    </div>
                                                    <div className="col-12">
                                                        <h6 className="block-title fw-bold mb-30">Comodidades</h6>
                                                        <ul className="style-none d-flex flex-wrap justify-content-between filter-input">
                                                            <li>
                                                                <input type="checkbox" name="Amenities" value="01" />
                                                                <label>A/C y Calefacción</label>
                                                            </li>
                                                            <li>
                                                                <input type="checkbox" name="Amenities" value="02" />
                                                                <label>Garajes</label>
                                                            </li>
                                                            <li>
                                                                <input type="checkbox" name="Amenities" value="03" />
                                                                <label>Jardín</label>
                                                            </li>
                                                            <li>
                                                                <input type="checkbox" name="Amenities" value="04" />
                                                                <label>Acceso para Discapacitados</label>
                                                            </li>
                                                            <li>
                                                                <input type="checkbox" name="Amenities" value="05" />
                                                                <label>Piscina</label>
                                                            </li>
                                                            <li>
                                                                <input type="checkbox" name="Amenities" value="06" />
                                                                <label>Estacionamiento</label>
                                                            </li>
                                                            <li>
                                                                <input type="checkbox" name="Amenities" value="07" />
                                                                <label>Wifi</label>
                                                            </li>
                                                            <li>
                                                                <input type="checkbox" name="Amenities" value="08" />
                                                                <label>Apto para Mascotas</label>
                                                            </li>
                                                            <li>
                                                                <input type="checkbox" name="Amenities" value="09" />
                                                                <label>Altura del Techo</label>
                                                            </li>
                                                            <li>
                                                                <input type="checkbox" name="Amenities" value="10" />
                                                                <label>Chimenea</label>
                                                            </li>
                                                            <li>
                                                                <input type="checkbox" name="Amenities" value="11" />
                                                                <label>Área de Juegos</label>
                                                            </li>
                                                            <li>
                                                                <input type="checkbox" name="Amenities" value="12" />
                                                                <label>Ascensor</label>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <h6 className="block-title fw-bold mt-45 mb-20">Rango de precio</h6>
                                                        <div className="price-ranger">
                                                            <div className="price-input d-flex align-items-center justify-content-between pt-5">
                                                                <div className="field d-flex align-items-center">
                                                                    <input type="number" className="input-min" value="2500" readonly />
                                                                </div>
                                                                <div className="divider-line"></div>
                                                                <div className="field d-flex align-items-center">
                                                                    <input type="number" className="input-max" value="35000" readonly />
                                                                </div>
                                                                <div className="currency ps-1">USD</div>
                                                            </div>
                                                            <div className="slider">
                                                                <div className="progress"></div>
                                                            </div>
                                                            <div className="range-input mb-10">
                                                                <input type="range" className="range-min" min="1000" max="80000" value="2500" step="500" />
                                                                <input type="range" className="range-max" min="0" max="100000" value="35000" step="500" />
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className="col-md-6">
                                                        <h6 className="block-title fw-bold mt-45 mb-20">PIES CUADRADOS</h6>
                                                        <div className="d-flex align-items-center sqf-ranger">
                                                            <input type="text" placeholder="Min" />
                                                            <div className="divider"></div>
                                                            <input type="text" placeholder="Max" />
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <button className="fw-500 text-uppercase tran3s apply-search w-100 mt-40 mb-25">
                                                            <i className="fa-light fa-magnifying-glass"></i>
                                                            <span>Buscar</span>
                                                        </button>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="d-flex justify-content-between form-widget">
                                                            <a href="#" className="tran3s">
                                                                <i className="fa-regular fa-arrows-rotate"></i>
                                                                <span>Restablecer Filtro</span>
                                                            </a>
                                                            <a href="#" className="tran3s">
                                                                <i className="fa-regular fa-star"></i>
                                                                <span>Guardar Búsqueda</span>
                                                            </a>
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


    		<button className="scroll-top">
    			<i className="bi bi-arrow-up-short"></i>
    		</button>

    	</div>
    </TemplatePageShell>
  );
}