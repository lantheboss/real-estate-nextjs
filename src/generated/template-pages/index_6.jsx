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




    		<header className="theme-main-menu menu-overlay menu-style-six sticky-menu">
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
    								<li className="d-none d-md-inline-block me-4">
                                        <a href="/dashboard/add-property" className="btn-ten rounded-0" target="_blank" rel="noopener noreferrer"><span>Añadir Propiedad</span> <i className="bi bi-arrow-up-right"></i></a>
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
    									<li className="d-md-none ps-2 pe-2 mt-20">
    										<a href="/dashboard/add-property" className="btn-ten w-100 rounded-0" target="_blank" rel="noopener noreferrer"><span>Añadir Propiedad</span> <i className="bi bi-arrow-up-right"></i></a>
    									</li>
    								</ul>
    							</div>
    						</nav>
    					</div>
    				</div> 
    			</div> 
    		</header> 





    		<div className="hero-banner-six z-2 position-relative pt-200 lg-pt-150">
    			<div className="container container-large">
                    <div className="position-relative">
                        <div className="row">
                            <div className="col-xxl-7 col-xl-6 col-lg-7">
                                <div className="position-relative pe-xxl-5 wow fadeInLeft">
                                    <h1 className="hero-heading">Encuentra un Espacioso y Acogedor <span className="d-inline-block position-relative">Hogar <img src="/images/lazy.svg" data-src="/images/shape/shape_58.svg" alt="" className="lazy-img" /></span> Ideal.</h1>
                                </div>
                            </div>
                            <div className="col-lg-5 ms-auto">
                                <div className="ps-xxl-5 pt-35 wow fadeInRight">
                                    <p className="color-dark sub-heading mb-40 lg-mb-20">¡Más de 745,000 anuncios, apartamentos, lotes y terrenos disponibles ahora!</p>
                                    <div className="d-flex flex-wrap justify-content-between align-items-start">
                                        <div className="d-flex flex-column justify-content-center align-items-start mt-20">
                                            <img src="/images/lazy.svg" data-src="/images/assets/screen_06.png" alt="" className="lazy-img" />
                                            <p className="m0 pt-10 rating"><span className="fw-500 color-dark">13k valoraciones</span> (4.7 Puntuación)</p>
                                        </div>
                                        <a href="/contact" className="btn-five rounded-0 md mt-20"><span>Contáctanos</span> <i className="bi bi-arrow-up-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="search-wrapper-one layout-one mt-250 xl-mt-150 lg-mt-100 position-relative">
                                    <nav className="search-filter-nav-one d-flex">
                                        <div className="nav nav-tabs border-0" role="tablist">
                                            <button className="nav-link m0 active" id="buy-tab" data-bs-toggle="tab" data-bs-target="#buy" type="button" role="tab" aria-controls="buy" aria-selected="true">Comprar</button>
                                            <button className="nav-link m0" id="rent-tab" data-bs-toggle="tab" data-bs-target="#rent" type="button" role="tab" aria-controls="rent" aria-selected="false">Alquilar</button>
                                            <button className="nav-link m0" id="sell-tab" data-bs-toggle="tab" data-bs-target="#sell" type="button" role="tab" aria-controls="sell" aria-selected="false">Vender</button>
                                        </div>
                                    </nav>
                                    <div className="bg-wrapper border-0 rounded-0">
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
                                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#advanceFilterModal" className="search-modal-btn tran3s text-uppercase fw-500 d-inline-flex align-items-center me-3">
                                                                        <span className="d-xl-none d-xxl-block">BÚSQUEDA Avanzada</span>
                                                                        <i className="fa-light fa-sliders-up"></i>
                                                                    </a>
                                                                    <button className="fw-500 text-uppercase tran3s search-btn-four">
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
                                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#advanceFilterModal" className="search-modal-btn tran3s text-uppercase fw-500 d-inline-flex align-items-center me-3">
                                                                        <span className="d-xl-none d-xxl-block">BÚSQUEDA Avanzada</span>
                                                                        <i className="fa-light fa-sliders-up"></i>
                                                                    </a>
                                                                    <button className="fw-500 text-uppercase tran3s search-btn-four">
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
                                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#advanceFilterModal" className="search-modal-btn tran3s text-uppercase fw-500 d-inline-flex align-items-center me-3">
                                                                        <span className="d-xl-none d-xxl-block">BÚSQUEDA Avanzada</span>
                                                                        <i className="fa-light fa-sliders-up"></i>
                                                                    </a>
                                                                    <button className="fw-500 text-uppercase tran3s search-btn-four">
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





    		<div className="category-section-one dark-bg pt-130 pb-110 xl-pb-80">
    			<div className="container container-large">
                    <div className="position-relative z-1">
                        <h4 className="mb-50 xl-mb-30 text-center text-md-start text-white">Categorías Populares.</h4>
                        <div className="wrapper">
                            <ul className="d-flex flex-wrap justify-content-center justify-content-xxl-between style-none">
                                <li>
                                    <a href="/listing_01" className="d-flex align-items-center fw-500 tran3s">
                                        <img src="/images/lazy.svg" data-src="/images/icon/icon_15.svg" alt="" className="lazy-img" />
                                        <span>Centro Comercial</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/listing_01" className="d-flex align-items-center fw-500 tran3s">
                                        <img src="/images/lazy.svg" data-src="/images/icon/icon_16.svg" alt="" className="lazy-img" />
                                        <span>Apartamentos</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/listing_01" className="d-flex align-items-center fw-500 tran3s">
                                        <img src="/images/lazy.svg" data-src="/images/icon/icon_17.svg" alt="" className="lazy-img" />
                                        <span>Villa</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/listing_01" className="d-flex align-items-center fw-500 tran3s">
                                        <img src="/images/lazy.svg" data-src="/images/icon/icon_18.svg" alt="" className="lazy-img" />
                                        <span>Industria</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/listing_01" className="d-flex align-items-center fw-500 tran3s">
                                        <img src="/images/lazy.svg" data-src="/images/icon/icon_19.svg" alt="" className="lazy-img" />
                                        <span>Oficina</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/listing_01" className="d-flex align-items-center fw-500 tran3s">
                                        <img src="/images/lazy.svg" data-src="/images/icon/icon_20.svg" alt="" className="lazy-img" />
                                        <span>Médico</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/listing_01" className="d-flex align-items-center fw-500 tran3s">
                                        <img src="/images/lazy.svg" data-src="/images/icon/icon_21.svg" alt="" className="lazy-img" />
                                        <span>Casa</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/listing_01" className="d-flex align-items-center fw-500 tran3s">
                                        <img src="/images/lazy.svg" data-src="/images/icon/icon_22.svg" alt="" className="lazy-img" />
                                        <span>Loft</span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="section-btn text-center sm-mt-40">
                            <a href="/listing_01" className="btn-eleven white-vr"><span>Ver todas las categorías</span> <i className="bi bi-chevron-right"></i></a>
                        </div>

                    </div>
                </div>
    		</div>





    		<div className="block-feature-twelve mt-150 xl-mt-100">
    			<div className="container container-large">
                    <div className="position-relative">
                        <div className="title-one text-center text-lg-start mb-60 xl-mb-40 lg-mb-20 wow fadeInUp">
    						<h3><span>Ciudades<img src="/images/lazy.svg" data-src="/images/shape/title_shape_03.svg" alt="" className="lazy-img" /></span> Populares</h3>
    					</div>


    					<div className="wrapper flex-wrap d-flex justify-content-center justify-content-md-between align-items-center">
                            <div className="location-card-three text-center wow fadeInUp">
                                <div className="image-bg position-relative z-1 rounded-circle overflow-hidden mb-30" style={{ backgroundImage: "url(images/media/img_38.jpg)" }}><a href="/listing_04" className="stretched-link"></a></div>
                                <a href="/listing_04" className="title"><h5>California</h5></a>
                                <p>1,230 Anuncios</p>
                            </div>


    						<div className="location-card-three text-center wow fadeInUp" data-wow-delay="0.1s">
                                <div className="image-bg position-relative z-1 rounded-circle overflow-hidden mb-30" style={{ backgroundImage: "url(images/media/img_39.jpg)" }}><a href="/listing_04" className="stretched-link"></a></div>
                                <a href="/listing_04" className="title"><h5>Miami</h5></a>
                                <p>1,140 Anuncios</p>
                            </div>


                            <div className="location-card-three text-center wow fadeInUp" data-wow-delay="0.2s">
                                <div className="image-bg position-relative z-1 rounded-circle overflow-hidden mb-30" style={{ backgroundImage: "url(images/media/img_40.jpg)" }}><a href="/listing_04" className="stretched-link"></a></div>
                                <a href="/listing_04" className="title"><h5>Nueva York</h5></a>
                                <p>1,740 Anuncios</p>
                            </div>


                            <div className="location-card-three text-center wow fadeInUp" data-wow-delay="0.3s">
                                <div className="image-bg position-relative z-1 rounded-circle overflow-hidden mb-30" style={{ backgroundImage: "url(images/media/img_41.jpg)" }}><a href="/listing_04" className="stretched-link"></a></div>
                                <a href="/listing_04" className="title"><h5>Washington DC</h5></a>
                                <p>720 Anuncios</p>
                            </div>

    					</div>
                        <div className="section-btn text-center md-mt-50">
                            <a href="/listing_04" className="btn-eight"><span>Explorar Todo</span> <i className="bi bi-arrow-up-right"></i></a>
                        </div>

                    </div>
                </div>
    		</div>





    		<div className="property-listing-three position-relative z-1 mt-170 xl-mt-120">
    			<div className="container container-large">
    				<div className="position-relative">
    					<div className="title-one mb-60 xl-mb-40 wow fadeInUp">
    						<h3><span>Propiedades<img src="/images/lazy.svg" data-src="/images/shape/title_shape_03.svg" alt="" className="lazy-img" /></span> Destacadas</h3>
    						<p className="fs-22 mt-xs">Explora propiedades destacadas en venta.</p>
    					</div>


    					<div className="row gx-xxl-5">
    						<div className="col-xxl-8 col-lg-7 d-flex">
    							<div className="listing-card-six w-100 position-relative z-1 wow fadeInUp" style={{ backgroundImage: "url(images/listing/img_25.jpg)" }}>
                                    <div className="w-100 h-100 d-flex flex-column">
                                        <div className="tag fw-500 text-uppercase">EN VENTA</div>
                                        <h4>Obtén Apartamentos en Ciudad Vintage.</h4>
                                        <a href="/listing_details_03" className="btn-four inverse rounded-circle"><i className="bi bi-arrow-up-right"></i></a>
                                    </div>
                                </div>

    						</div>
    						<div className="col-xxl-4 col-lg-5 d-flex">
    							<div className="w-100 h-100">
    								<div className="row">
    									<div className="col-lg-12 col-md-6">
    										<div className="listing-card-five w-100 position-relative z-1 md-mt-40 wow fadeInUp" style={{ backgroundImage: "url(images/listing/img_23.jpg)" }}>
    											<div className="w-100 h-100 d-flex flex-column">
    												<div className="tag fw-500 text-uppercase">EN VENTA</div>
    												<h4>Villa Dúplex Sky.</h4>
    												<a href="/listing_details_03" className="btn-four rounded-circle"><i className="bi bi-arrow-up-right"></i></a>
    											</div>
    										</div>

    									</div>
    									<div className="col-lg-12 col-md-6">
    										<div className="listing-card-five w-100 position-relative z-1 mt-40 wow fadeInUp" style={{ backgroundImage: "url(images/listing/img_24.jpg)" }}>
    											<div className="w-100 h-100 d-flex flex-column">
    												<div className="tag fw-500 text-uppercase">EN ALQUILER</div>
    												<h4>Casa Galaxy Touch.</h4>
    												<a href="/listing_details_03" className="btn-four rounded-circle"><i className="bi bi-arrow-up-right"></i></a>
    											</div>
    										</div>

    									</div>
    								</div>
    							</div>
    						</div>
    					</div>

    					<div className="section-btn text-center md-mt-60">
    						<a href="/listing_04" className="btn-eight"><span>Explorar Todo</span> <i className="bi bi-arrow-up-right"></i></a>
    					</div>
    				</div>
    			</div>
    		</div>






    		<div className="property-listing-five mt-170 xl-mt-120">
    			<div className="container container-large">
    				<div className="position-relative">
    					<div className="title-one mb-25 lg-mb-20 md-mb-10 wow fadeInUp">
    						<h3><span>Nuevas<img src="/images/lazy.svg" data-src="/images/shape/title_shape_03.svg" alt="" className="lazy-img" /></span> Propiedades</h3>
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
    													<a href="/listing_details_04" className="d-block"><img src="/images/listing/img_17.jpg" className="w-100" alt="..." /></a>
    												</div>
    												<div className="carousel-item" data-bs-interval="1000000">
    													<a href="/listing_details_04" className="d-block"><img src="/images/listing/img_18.jpg" className="w-100" alt="..." /></a>
    												</div>
    												<div className="carousel-item" data-bs-interval="1000000">
    													<a href="/listing_details_04" className="d-block"><img src="/images/listing/img_19.jpg" className="w-100" alt="..." /></a>
    												</div>
    											</div>
    										</div>
    									</div>
    								</div>

    								<div className="property-info pt-20">
    									<a href="/listing_details_04" className="title tran3s">Villa Blueberry</a>
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
    										<a href="/listing_details_04" className="btn-four"><i className="bi bi-arrow-up-right"></i></a>
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
    													<a href="/listing_details_04" className="d-block"><img src="/images/listing/img_18.jpg" className="w-100" alt="..." /></a>
    												</div>
    												<div className="carousel-item" data-bs-interval="1000000">
    													<a href="/listing_details_04" className="d-block"><img src="/images/listing/img_19.jpg" className="w-100" alt="..." /></a>
    												</div>
    												<div className="carousel-item" data-bs-interval="1000000">
    													<a href="/listing_details_04" className="d-block"><img src="/images/listing/img_17.jpg" className="w-100" alt="..." /></a>
    												</div>
    											</div>
    										</div>
    									</div>
    								</div>

    								<div className="property-info pt-20">
    									<a href="/listing_details_04" className="title tran3s">Villa White House</a>
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
    										<a href="/listing_details_04" className="btn-four"><i className="bi bi-arrow-up-right"></i></a>
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
    													<a href="/listing_details_04" className="d-block"><img src="/images/listing/img_19.jpg" className="w-100" alt="..." /></a>
    												</div>
    												<div className="carousel-item" data-bs-interval="1000000">
    													<a href="/listing_details_04" className="d-block"><img src="/images/listing/img_18.jpg" className="w-100" alt="..." /></a>
    												</div>
    												<div className="carousel-item" data-bs-interval="1000000">
    													<a href="/listing_details_04" className="d-block"><img src="/images/listing/img_17.jpg" className="w-100" alt="..." /></a>
    												</div>
    											</div>
    										</div>
    									</div>
    								</div>

    								<div className="property-info pt-20">
    									<a href="/listing_details_04" className="title tran3s">Villa de lujo en el lago Dal.</a>
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
    										<a href="/listing_details_04" className="btn-four"><i className="bi bi-arrow-up-right"></i></a>
    									</div>
    								</div>

    							</div>

    						</div>
    					</div>

    					<div className="section-btn text-center md-mt-60">
    						<a href="/listing_04" className="btn-eight"><span>Explorar Todo</span> <i className="bi bi-arrow-up-right"></i></a>
    					</div>
    				</div>
    			</div>
    		</div>






    		<div className="block-feature-thirteen bg-pink pt-160 xl-pt-120 lg-pt-80 pb-130 xl-pb-100 lg-pb-80 mt-170 xl-mt-120">
    			<div className="position-relative z-1">
                    <div className="container container-large">
                        <div className="row">
                            <div className="col-xl-5 col-lg-6 ms-auto order-lg-last wow fadeInRight">
                                <div className="pb-85 xl-pb-50 position-relative z-1">
                                    <div className="title-one mb-55 lg-mb-20">
    									<h3>Encuentra tu <span>Combinación<img src="/images/lazy.svg" data-src="/images/shape/title_shape_03.svg" alt="" className="lazy-img" /></span> Perfecta Fácilmente.</h3>
    								</div>

                                    <div className="accordion-style-three">
    									<div className="accordion" id="accordionThree">
    										<div className="accordion-item">
    											<h2 className="accordion-header">
    												<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOneA" aria-expanded="false" aria-controls="collapseOneA">
    													¿Quiénes somos?
    												</button>
    											  </h2>
    											  <div id="collapseOneA" className="accordion-collapse collapse show" data-bs-parent="#accordionThree">
    												<div className="accordion-body">
    													<p className="fs-22">Nuestros fundadores Dustin Moskovitz y Justin Rosenstein se conocieron mientras lideraban Ingeniería.</p>
    												</div>
    											  </div>
    										</div>
    										<div className="accordion-item">
    											<h2 className="accordion-header">
    												<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwoA" aria-expanded="false" aria-controls="collapseTwoA">
    													Cuál es nuestro objetivo
    												</button>
    											</h2>
    											<div id="collapseTwoA" className="accordion-collapse collapse" data-bs-parent="#accordionThree">
    												<div className="accordion-body">
    													<p className="fs-22">Nuestros fundadores Dustin Moskovitz y Justin Rosenstein se conocieron mientras lideraban Ingeniería.</p>
    												</div>
    											</div>
    										</div>
    										<div className="accordion-item">
    											<h2 className="accordion-header">
    												<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThreeA" aria-expanded="true" aria-controls="collapseThreeA">
    													Nuestra visión
    												</button>
    											</h2>
    											<div id="collapseThreeA" className="accordion-collapse collapse" data-bs-parent="#accordionThree">
    												<div className="accordion-body">
    													<p className="fs-22">Nuestros fundadores Dustin Moskovitz y Justin Rosenstein se conocieron mientras lideraban Ingeniería.</p>
    												</div>
    											</div>
    										</div>
    									</div>
    								</div>

    								<div className="d-inline-flex flex-wrap align-items-center mt-70 xl-mt-50 lg-mt-30">
    									<a href="/about_us_01" className="btn-five md rounded-0 mt-20 me-5"><span>Más Detalles</span></a>
    									<a href="/contact" className="btn-three mt-20"><span>Solicitar una Llamada</span> <i className="fa-light fa-arrow-right-long"></i></a>
    								</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="media-gallery wow fadeInLeft">
                        <div className="bg" style={{ backgroundImage: "url(images/media/img_48.jpg)" }}>
                            <div className="card-style-three p0">
                                <div className="bg-wrapper text-center">
                                    <h3>07+</h3>
                                    <p>Años de Experiencia <br />con orgullo.</p>
                                </div>
                            </div>
                            <img src="/images/lazy.svg" data-src="/images/assets/screen_09.png" alt="" className="lazy-img screen_01" />
                        </div>
                    </div>

                </div>
    		</div>






    		<div className="block-feature-fourteen pt-120 xl-pt-100 pb-140 xl-pb-100">
    			<div className="container container-large">
    				<div className="row">
    					<div className="col-lg-6">
    						<div className="title-one md-mb-30 pe-xxl-4 wow fadeInLeft">
    							<h3 className="m0 text-white">Fácilmente <span>Compra,<img src="/images/lazy.svg" data-src="/images/shape/title_shape_09.svg" alt="" className="lazy-img" /></span> Vende o Alquila propiedades.</h3>
    						</div>

    					</div>
    					<div className="col-xxl-5 col-lg-6 ms-auto">
    						<p className="text-white fs-24 m0 lh-lg ps-xxl-5 wow fadeInRight">Tu principal defensor inmobiliario, transformando casas en sueños. Confía en nosotros para guiarte a casa con experiencia</p>
    					</div>
    				</div>

    				<div className="card-bg-wrapper wow fadeInUp mt-70 lg-mt-50">
    					<div className="row">
    						<div className="col-lg-4">
    							<div className="card-style-eight mt-45 wow fadeInUp">
    								<div className="d-flex align-items-start pe-xxl-5">
    									<img src="/images/lazy.svg" data-src="/images/icon/icon_40.svg" alt="" className="lazy-img icon" />
    									<div className="text">
    										<h5 className="text-white">Seguro de Propiedad</h5>
    										<p>Elit esse cillum dol fug nulla tur nos ullamo.</p>
    									</div>
    								</div>
    							</div>

    						</div>
    						<div className="col-lg-4">
    							<div className="card-style-eight mt-45 wow fadeInUp">
    								<div className="d-flex align-items-start pe-xxl-2 ps-xxl-2">
    									<img src="/images/lazy.svg" data-src="/images/icon/icon_41.svg" alt="" className="lazy-img icon" />
    									<div className="text">
    										<h5 className="text-white">Pagos Fáciles</h5>
    										<p>quis nostrud exerct ulla security finibus ne derived.</p>
    									</div>
    								</div>
    							</div>

    						</div>
    						<div className="col-lg-4">
    							<div className="card-style-eight mt-45 wow fadeInUp">
    								<div className="d-flex align-items-start ps-xxl-5">
    									<img src="/images/lazy.svg" data-src="/images/icon/icon_42.svg" alt="" className="lazy-img icon" />
    									<div className="text">
    										<h5 className="text-white">Proceso Rápido</h5>
    										<p>Duis aute irure do reprehe de Cicero's voluptat velit.</p>
    									</div>
    								</div>
    							</div>

    						</div>
    					</div>
    				</div>

    			</div>
    		</div>





    		<div className="feedback-section-seven mt-170 xl-mt-120 md-mt-80">
    			<div className="container container-large">
    				<div className="position-relative z-1">
    					<div className="row">
    						<div className="col-lg-5">
    							<div className="title-one mt-30 md-mb-50 pe-xxl-4 wow fadeInLeft">
    								<div className="upper-title">FEEDBACK DE CLIENTES</div>
    								<h3>Confía en los Clientes, No Solo en Nuestras Afirmaciones.</h3>
    							</div>

    						</div>
    						<div className="col-lg-7">
    							<div className="content-wrapper position-relative z-1 ms-xxl-3">
    								<div className="icon d-flex align-items-center justify-content-center rounded-circle mb-35"><img src="/images/lazy.svg" data-src="/images/icon/icon_38.svg" alt="" className="lazy-img" /></div>

    								<div className="feedback-slider-one">
    									<div className="item">
    										<div className="feedback-block-five">
    											<blockquote>Servicio eficiente y amable, nos guiaron <span>perfectamente</span>. Estoy satisfecho con nuestro nuevo hogar. ¡Dale una oportunidad. Gracias!</blockquote>
    											<div className="d-flex align-items-center justify-content-end ct-info">
    												<img src="/images/media/img_01.jpg" alt="" className="rounded-circle avatar" />
    												<div className="ps-3">
    													<h6 className="fs-20 m0">Musa Delimuza</h6>
    													<span className="fs-16 opacity-50">Miami, EE. UU.</span>
    												</div>
    											</div>
    										</div>

    									</div>
    									<div className="item">
    										<div className="feedback-block-five">
    											<blockquote>Encontramos la casa de nuestros sueños. Excelente <span>negocio</span> con ellos. Gracias por el excelente servicio. Volveré a contratarlos seguro.</blockquote>
    											<div className="d-flex align-items-center justify-content-end ct-info">
    												<img src="/images/media/img_02.jpg" alt="" className="rounded-circle avatar" />
    												<div className="ps-3">
    													<h6 className="fs-20 m0">Alina Cruse</h6>
    													<span className="fs-16 opacity-50">Miami, Italia</span>
    												</div>
    											</div>
    										</div>

    									</div>
    									<div className="item">
    										<div className="feedback-block-five">
    											<blockquote>Servicio eficiente y amable, nos guiaron <span>perfectamente</span>. Estoy satisfecho con nuestro nuevo hogar. ¡Dale una oportunidad. Gracias!</blockquote>
    											<div className="d-flex align-items-center justify-content-end ct-info">
    												<img src="/images/media/img_03.jpg" alt="" className="rounded-circle avatar" />
    												<div className="ps-3">
    													<h6 className="fs-20 m0">Rashed Ka.</h6>
    													<span className="fs-16 opacity-50">Miami, EE. UU.</span>
    												</div>
    											</div>
    										</div>

    									</div>
    								</div>
    							</div>

    						</div>
    					</div>
    					<div className="rating-box">
    						<img src="/images/lazy.svg" data-src="/images/shape/shape_62.svg" alt="" className="lazy-img" />
    						<div className="rate fw-500">9.3 <br /><span>Puntuación</span></div>
    					</div>
    				</div>
    			</div>
    		</div>




    		<div className="partner-section-two mt-90 lg-mt-50">
    			<div className="container container-large">
    				<div className="wrapper bottom-border pb-65 lg-pb-40">
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






    		<div className="blog-section-two mt-170 xl-mt-120">
    			<div className="container container-large">
    				<div className="position-relative">
    					<div className="title-one mb-50 xl-mb-20 wow fadeInUp">
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
    						<a href="/blog_02" className="btn-eight"><span>Explorar Todo</span> <i className="bi bi-arrow-up-right"></i></a>
    					</div>
    				</div>
    			</div>
    		</div>





    		<div className="fancy-banner-eight bg-pink-two overflow-hidden wow fadeInUp pt-10 mt-170 xl-mt-120 md-mt-90">
    			<div className="container container-large">
    				<div className="bg-wrapper p0 position-relative z-1">
    					<div className="row align-items-end">
    						<div className="col-xl-5 col-lg-7 col-md-7">
    							<div className="pb-80 lg-pb-40 md-pt-40">
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





    		<div className="footer-four dark-bg position-relative z-1">
    			<div className="news-letter-area">
    				<div className="container container-large">
    					<div className="line-wrapper">
    						<div className="row align-items-center">
    							<div className="col-lg-6">
    								<div className="text-center text-lg-start md-mb-40">
    									<h2 className="text-white">Nuestro Boletín</h2>
    									<p className="fs-24 text-white opacity-75 m0">Recibe noticias al instante suscribiéndote a nuestro boletín</p>
    								</div>
    							</div>
    							<div className="col-lg-6">
    								<div className="form-wrapper me-auto ms-auto me-lg-0">
    									<form action="#">
    										<input type="email" placeholder="Correo electrónico" className="rounded-0" />
    										<button className="rounded-0">Comenzar</button>
    									</form>
    									<div className="fs-16 mt-10 text-white"><span className="fw-light opacity-75">¿Ya eres un Agente?</span> <a href="#" data-bs-toggle="modal" data-bs-target="#loginModal">Inicia sesión.</a></div>
    								</div>
    							</div>
    						</div>
    					</div>

    				</div>
    			</div>

    			<div className="container container-large">
    				<div className="bg-wrapper position-relative z-1">
    					<div className="row">
    						<div className="col-xl-3 col-lg-4 mb-60">
    							<div className="footer-intro">
    								<div className="logo mb-20">
    									<a href="/">
    										<img src="/images/logo/logo.svg" alt="" />
    									</a>
    								</div> 

    								<p className="mb-45 md-mb-20">11910 Clyde Rapid Suite 210, Willyand, Virginia, EE. UU.</p>
    								<ul className="style-none d-flex align-items-center social-icon">
    									<li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
    									<li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
    									<li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
    								</ul>
    							</div>
    						</div>
    						<div className="col-lg-3 col-md-4 ms-auto mb-30">
    							<div className="footer-nav ps-xl-5">
    								<h5 className="footer-title text-white">Enlaces</h5>
    								<ul className="footer-nav-link style-none">
    									<li><a href="/">Inicio</a></li>
    									<li><a href="/dashboard/membership" target="_blank" rel="noopener noreferrer">Membresía</a></li>
    									<li><a href="/about_us_01">Sobre la Empresa</a></li>
    									<li><a href="/blog_01">Blog</a></li>
    									<li><a href="/blog_02">Explorar Empleos</a></li>
    									<li><a href="/pricing_02">Precios</a></li>
    								</ul>
    							</div>
    						</div>
    						<div className="col-lg-3 col-md-4 mb-30">
    							<div className="footer-nav">
    								<h5 className="footer-title text-white">Legal</h5>
    								<ul className="footer-nav-link style-none">
    									<li><a href="/faq">Términos y condiciones</a></li>
    									<li><a href="/faq">Cookies</a></li>
    									<li><a href="/faq">Política de privacidad</a></li>
    									<li><a href="/faq">Preguntas frecuentes</a></li>
    								</ul>
    							</div>
    						</div>
    						<div className="col-lg-2 col-md-4 mb-30">
    							<div className="footer-nav">
    								<h5 className="footer-title text-white">Nuevas Propiedades</h5>
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