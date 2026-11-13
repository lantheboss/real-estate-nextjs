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



            <div className="offcanvas offcanvas-end sidebar-nav" data-bs-backdrop="static" tabIndex="-1" id="sideNav" aria-labelledby="staticBackdropLabel">
                <div className="offcanvas-header">
                	<div className="logo order-lg-0">
    					<a href="/" className="d-flex align-items-center">
    						<img src="/images/logo/logo.svg" alt="" />
    					</a>
    				</div>
                	<button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="wrapper mt-60">
    				<div className="d-flex flex-column h-100">
    					<div className="property-block">
    						<h4 className="title pb-25">Propiedades Destacadas </h4>
    						<div className="row">
    							<div className="col-12">
    								<div className="listing-card-one shadow-none style-two mb-40">
    									<div className="img-gallery">
    										<div className="position-relative overflow-hidden">
    											<div className="tag bg-white text-dark fw-500">EN ALQUILER</div>
    											<img src="/images/listing/img_69.jpg" className="w-100" alt="..." />

    											<div className="img-slider-btn">
    												03 <i className="fa-regular fa-image"></i>
    												<a href="/images/listing/img_large_01.jpg" className="d-block" data-fancybox="img1" data-caption="Villa Blueberry"></a>
    												<a href="/images/listing/img_large_02.jpg" className="d-block" data-fancybox="img1" data-caption="Villa Blueberry"></a>
    												<a href="/images/listing/img_large_03.jpg" className="d-block" data-fancybox="img1" data-caption="Villa Blueberry"></a>
    											</div>
    										</div>
    									</div>

    									<div className="property-info d-flex justify-content-between align-items-end pt-30">
    										<div>
    											<strong className="price fw-500 color-dark fs-3">$2,210/ <sub>m</sub></strong>
    											<div className="address pt-5 m0">Calle Elgin 6391, Celina</div>
    										</div>
    										<a href="#" className="btn-four mb-5"><i className="bi bi-arrow-up-right"></i></a>
    									</div>

    								</div>

    							</div>
    							<div className="col-12">
    								<div className="listing-card-one shadow-none style-two mb-40">
    									<div className="img-gallery">
    										<div className="position-relative overflow-hidden">
    											<div className="tag bg-white text-dark fw-500">EN ALQUILER</div>
    											<img src="/images/listing/img_70.jpg" className="w-100" alt="..." />

    											<div className="img-slider-btn">
    												03 <i className="fa-regular fa-image"></i>
    												<a href="/images/listing/img_large_01.jpg" className="d-block" data-fancybox="img2" data-caption="Villa Blueberry"></a>
    												<a href="/images/listing/img_large_02.jpg" className="d-block" data-fancybox="img2" data-caption="Villa Blueberry"></a>
    												<a href="/images/listing/img_large_03.jpg" className="d-block" data-fancybox="img2" data-caption="Villa Blueberry"></a>
    											</div>
    										</div>
    									</div>

    									<div className="property-info d-flex justify-content-between align-items-end pt-30">
    										<div>
    											<strong className="price fw-500 color-dark fs-3">$2,210/ <sub>m</sub></strong>
    											<div className="address pt-5 m0">Calle Elgin 6391, Celina</div>
    										</div>
    										<a href="#" className="btn-four mb-5"><i className="bi bi-arrow-up-right"></i></a>
    									</div>

    								</div>

    							</div>
    							<div className="col-12">
    								<div className="listing-card-one shadow-none style-two mb-40">
    									<div className="img-gallery">
    										<div className="position-relative overflow-hidden">
    											<div className="tag bg-white text-dark fw-500">EN VENTA</div>
    											<img src="/images/listing/img_71.jpg" className="w-100" alt="..." />

    											<div className="img-slider-btn">
    												03 <i className="fa-regular fa-image"></i>
    												<a href="/images/listing/img_large_01.jpg" className="d-block" data-fancybox="img3" data-caption="Villa Blueberry"></a>
    												<a href="/images/listing/img_large_02.jpg" className="d-block" data-fancybox="img3" data-caption="Villa Blueberry"></a>
    												<a href="/images/listing/img_large_03.jpg" className="d-block" data-fancybox="img3" data-caption="Villa Blueberry"></a>
    											</div>
    										</div>
    									</div>

    									<div className="property-info d-flex justify-content-between align-items-end pt-30">
    										<div>
    											<strong className="price fw-500 color-dark fs-3">$1,23,710</strong>
    											<div className="address pt-5 m0">Calle Elgin 6391, Celina</div>
    										</div>
    										<a href="#" className="btn-four mb-5"><i className="bi bi-arrow-up-right"></i></a>
    									</div>

    								</div>

    							</div>
    							<div className="col-12">
    								<div className="listing-card-one shadow-none style-two mb-40">
    									<div className="img-gallery">
    										<div className="position-relative overflow-hidden">
    											<div className="tag bg-white text-dark fw-500">EN VENTA</div>
    											<img src="/images/listing/img_72.jpg" className="w-100" alt="..." />

    											<div className="img-slider-btn">
    												03 <i className="fa-regular fa-image"></i>
    												<a href="/images/listing/img_large_01.jpg" className="d-block" data-fancybox="img4" data-caption="Villa Blueberry"></a>
    												<a href="/images/listing/img_large_02.jpg" className="d-block" data-fancybox="img4" data-caption="Villa Blueberry"></a>
    												<a href="/images/listing/img_large_03.jpg" className="d-block" data-fancybox="img4" data-caption="Villa Blueberry"></a>
    											</div>
    										</div>
    									</div>

    									<div className="property-info d-flex justify-content-between align-items-end pt-30">
    										<div>
    											<strong className="price fw-500 color-dark fs-3">$78,420</strong>
    											<div className="address pt-5 m0">Calle Elgin 6391, Celina</div>
    										</div>
    										<a href="#" className="btn-four mb-5"><i className="bi bi-arrow-up-right"></i></a>
    									</div>

    								</div>

    							</div>
    						</div>
    					</div>
    					<div className="address-block mt-50">
    						<h4 className="title pb-15">Nuestra Dirección</h4>
    						<p>Chowrastar Mirpur- 1210, Río <br />Sangu, Dhaka</p>
    						<p>¿Problema urgente? Llámanos al <br /><a href="tel:310.841.5500">310.841.5500</a></p>
    					</div>
    					<ul className="style-none d-flex flex-wrap w-100 justify-content-between align-items-center social-icon pt-25 mt-auto">
    						<li><a href="#"><i className="fa-brands fa-whatsapp"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-viber"></i></a></li>
    					</ul>
    				</div>
                </div>
            </div>




    		<header className="theme-main-menu menu-overlay menu-style-five sticky-menu">
    			<div className="inner-content gap-one">
    				<div className="top-header position-relative">
    					<div className="d-flex align-items-center">
    						<div className="logo order-lg-0">
    							<a href="/" className="d-flex align-items-center">
    								<img src="/images/logo/logo.svg" alt="" />
    							</a>
    						</div>

    						<div className="right-widget ms-auto me-3 me-lg-0 order-lg-4">
    							<ul className="d-flex align-items-center style-none">
    								<li className="d-flex align-items-center login-btn-one">
                                        <i className="fa-regular fa-lock"></i> 
                                        <a href="#" data-bs-toggle="modal" data-bs-target="#loginModal" className="fw-500 tran3s">Iniciar Sesión <span className="d-none d-sm-inline-block">/ Registrarse</span></a>
                                    </li>
    								<li className="d-none d-md-inline-block ms-3 ms-xl-4 me-xl-4">
                                        <a href="/dashboard/add-property" className="btn-five md rounded-0" target="_blank" rel="noopener noreferrer"><span>Añadir Propiedad</span> <i className="fa-thin fa-arrow-up-right"></i></a>
                                    </li>
                                    <li className="d-none d-xl-block"><button className="sidenavbtn rounded-circle tran3s" type="button" data-bs-toggle="offcanvas" data-bs-target="#sideNav" aria-controls="sideNav"><i className="fa-sharp fa-light fa-bars-filter"></i></button></li>
    							</ul>
    						</div>
                            <div className="order-lg-2 d-none d-xxl-block">
                                <p className="m0 email-text ps-5 pe-5">Nuestro Correo <a href="#" className="tran3s fw-500 ms-2">hola@homerealestate.com</a></p>
                            </div>
    						<nav className="navbar navbar-expand-lg p0 ms-lg-5 order-lg-3">
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
    										<a href="/dashboard/add-property" className="btn-five md w-100 rounded-0" target="_blank" rel="noopener noreferrer"><span>Añadir Propiedad</span> <i className="fa-thin fa-arrow-up-right"></i></a>
    									</li>
    								</ul>
    							</div>
    						</nav>
    					</div>
    				</div> 
    			</div> 
    		</header> 





    		<div className="hero-banner-five bg-pink z-2 position-relative pt-200 md-pt-150">
    			<div className="container container-large">
                    <div className="position-relative">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="position-relative z-1">
                                    <h1 className="hero-heading font-garamond wow fadeInUp mb-50">No confíes en nosotros, confía en nuestros Clientes.</h1>
                                    <img src="/images/lazy.svg" data-src="/images/shape/shape_54.svg" alt="" className="lazy-img shape_01 shapes d-none d-lg-block" />
                                    <div className="row">
                                        <div className="col-xl-7 col-lg-12 col-md-7">
                                            <p className="fs-24 color-dark m0 lg-pb-20 wow fadeInUp" data-wow-delay="0.1s">Más de 745,000 anuncios, apartamentos, lotes y terrenos disponibles ahora</p>
                                        </div>
                                        <div className="col-xl-5 col-lg-12 col-md-5">
                                            <div className="d-flex flex-column justify-content-center align-items-start">
                                                <img src="/images/lazy.svg" data-src="/images/assets/screen_06.png" alt="" className="lazy-img" />
                                                <p className="m0 pt-10 rating"><span className="fw-500 color-dark">13k valoraciones</span> (4.7 Puntuación)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xxl-9 col-xl-11">
                                <div className="search-wrapper-one layout-one mt-60 lg-mt-40 position-relative">
                                    <nav className="search-filter-nav-one d-flex">
                                        <div className="nav nav-tabs border-0" role="tablist">
                                            <button className="nav-link active" id="buy-tab" data-bs-toggle="tab" data-bs-target="#buy" type="button" role="tab" aria-controls="buy" aria-selected="true">Comprar</button>
                                            <button className="nav-link" id="rent-tab" data-bs-toggle="tab" data-bs-target="#rent" type="button" role="tab" aria-controls="rent" aria-selected="false">Alquilar</button>
                                        </div>
                                    </nav>
                                    <div className="bg-wrapper p0 border-0 rounded-0">
                                        <div className="tab-content">
                                            <div className="tab-pane show active" id="buy" role="tabpanel" aria-labelledby="buy-tab" tabIndex="0">
                                                <form action="#" className="md-pt-20">
                                                    <div className="row gx-0 align-items-center">
                                                        <div className="col-lg-3">
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
                                                        <div className="col-lg-4">
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
                                                            <div className="input-box-one">
                                                                <div className="label">Rango de Precio</div>
                                                                <select className="nice-select fw-normal">
                                                                    <option value="1">$10,000 - $200,000</option>
                                                                    <option value="2">$200,000 - $300,000</option>
                                                                    <option value="2">$300,000 - $400,000</option>
                                                                </select>
                                                            </div>

                                                        </div>
                                                        <div className="col-xl-2 col-lg-1">
                                                            <div className="input-box-one p0 ms-xl-5 md-mt-20">
                                                                <button className="fw-500 text-uppercase tran3s search-btn-two w-100 h-100 pt-45 lg-pt-30 md-pt-20 pb-45 lg-pb-30 md-pb-20 fs-2"><i className="fa-light fa-magnifying-glass"></i></button>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="tab-pane" id="rent" role="tabpanel" aria-labelledby="rent-tab" tabIndex="0">
                                                <form action="#" className="md-pt-20">
                                                    <div className="row gx-0 align-items-center">
                                                        <div className="col-lg-3">
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
                                                        <div className="col-lg-4">
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
                                                            <div className="input-box-one">
                                                                <div className="label">Rango de Precio</div>
                                                                <select className="nice-select fw-normal">
                                                                    <option value="1">$10,000 - $200,000</option>
                                                                    <option value="2">$200,000 - $300,000</option>
                                                                    <option value="2">$300,000 - $400,000</option>
                                                                </select>
                                                            </div>

                                                        </div>
                                                        <div className="col-xl-2 col-lg-1">
                                                            <div className="input-box-one p0 ms-xl-5 md-mt-20">
                                                                <button className="fw-500 text-uppercase tran3s search-btn-two w-100 h-100 pt-45 lg-pt-30 md-pt-20 pb-45 lg-pb-30 md-pb-20 fs-2"><i className="fa-light fa-magnifying-glass"></i></button>
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
    			<img src="/images/lazy.svg" data-src="/images/assets/ils_05.svg" alt="" className="lazy-img shapes illustration" />
    			<div className="media-wrapper">
                    <div className="bg"></div>
                </div>

    		</div>





    		<div className="block-feature-eleven mt-300 xl-mt-200 md-mt-100">
    			<div className="container container-large">
    				<div className="row">
    					<div className="col-lg-5">
    						<div className="title-one md-mb-40">
                                <h3>Más de 1,230 empresas confían en nosotros.</h3>
                            </div>

    					</div>
    					<div className="col-xxl-6 col-lg-7 ms-auto">
    						<p className="fs-24 lh-lg mb-30 color-dark">Tu principal defensor inmobiliario, transformando casas en sueños. Confía en nosotros para guiarte a casa con experiencia. 745,000 apartamentos y casas en venta, alquiler e hipoteca.</p>
                            <div className="d-inline-flex flex-wrap align-items-center">
                                <a href="/about_us_02" className="btn-five md rounded-0 mt-20 me-5"><span>Más Detalles</span></a>
                                <a href="/contact" className="btn-three mt-20"><span>Solicitar una Llamada</span> <i className="fa-light fa-arrow-right-long"></i></a>
                            </div>
    					</div>
    				</div>
    			</div>
    		</div>





    		<div className="partner-section-two mt-100 lg-mt-80">
    			<div className="container container-large">
    				<div className="wrapper bottom-border pb-55 lg-pb-40">
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






    		<div className="property-listing-five mt-170">
    			<div className="container container-large">
    				<div className="position-relative">
    					<div className="title-one mb-25 lg-mb-10 wow fadeInUp">
    						<h3>Propiedades Populares</h3>
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
    						<a href="/listing_03" className="btn-eight"><span>Explorar Todo</span> <i className="bi bi-arrow-up-right"></i></a>
    					</div>
    				</div>
    			</div>
    		</div>





    		<div className="block-feature-twelve mt-170 xl-mt-120">
    			<div className="container container-large">
                    <div className="position-relative">
                        <div className="title-one text-center text-lg-start mb-60 xl-mb-40 lg-mb-20 wow fadeInUp">
    						<h3>Ciudades Populares</h3>
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





    		<div className="block-feature-nine bg-pink-two position-relative z-1 mt-170 xl-mt-100 pt-120 xl-pt-80 pb-150 xl-pb-80">
    			<div className="container container-large">
    				<div className="position-relative">
    					<div className="row">
    						<div className="title-one text-center mb-50 lg-mb-20 wow fadeInUp">
    							<h3>Comprar, Alquilar y Vender</h3>
    							<p className="fs-22">Más de 745K anuncios de apartamentos, lotes y terrenos disponibles hoy.</p>
    						</div>

    					</div>

    					<div className="row gx-xxl-5">
    						<div className="col-lg-4 col-md-6 mt-30 d-flex wow fadeInUp">
    							<div className="card-style-six d-inline-flex flex-column align-items-start tran3s h-100 w-100">
    								<div className="icon d-flex align-items-center justify-content-center rounded-circle tran3s"><img src="/images/lazy.svg" data-src="/images/icon/icon_35.svg" alt="" className="lazy-img" /></div>
    								<h5 className="mt-35 mb-20">Comprar una casa</h5>
    								<p className="mb-40">Explora los más de 2 millones de hogares de Home Real Estate y descubre tu espacio ideal para vivir.</p>
    								<a href="/listing_08" className="btn-twelve rounded-0 sm mt-auto">Comprar Casa</a>
    							</div>

    						</div>
    						<div className="col-lg-4 col-md-6 mt-30 d-flex wow fadeInUp" data-wow-delay="0.1s">
    							<div className="card-style-six d-inline-flex flex-column align-items-start tran3s h-100 w-100">
    								<div className="icon d-flex align-items-center justify-content-center rounded-circle tran3s"><img src="/images/lazy.svg" data-src="/images/icon/icon_36.svg" alt="" className="lazy-img" /></div>
    								<h5 className="mt-35 mb-20">Alquilar una casa</h5>
    								<p className="mb-40">Descubre un alquiler que te encantará en Home Real Estate, gracias a más de 35 filtros.</p>
    								<a href="/listing_08" className="btn-twelve rounded-0 sm mt-auto">Alquilar Casa</a>
    							</div>

    						</div>
    						<div className="col-lg-4 col-md-6 mt-30 d-flex wow fadeInUp" data-wow-delay="0.2s">
    							<div className="card-style-six d-inline-flex flex-column align-items-start tran3s h-100 w-100">
    								<div className="icon d-flex align-items-center justify-content-center rounded-circle tran3s"><img src="/images/lazy.svg" data-src="/images/icon/icon_37.svg" alt="" className="lazy-img" /></div>
    								<h5 className="mt-35 mb-20">Vender Casa</h5>
    								<p className="mb-40">Publica, vende y prospera con nuestra excelente agencia inmobiliaria. Es muy fácil.</p>
    								<a href="/listing_08" className="btn-twelve rounded-0 sm mt-auto">Vender Casa</a>
    							</div>

    						</div>
    					</div>
    				</div>
    			</div>
                <img src="/images/lazy.svg" data-src="/images/shape/shape_55.svg" alt="" className="lazy-img shapes shape_01" />
                <img src="/images/lazy.svg" data-src="/images/shape/shape_56.svg" alt="" className="lazy-img shapes shape_02" />
    		</div>





    		<div className="block-feature-ten mt-200 xl-mt-150 lg-mt-110">
    			<div className="container container-large">
    				<div className="row">
    					<div className="col-lg-6 ms-auto order-lg-last wow fadeInRight">
    						<div className="pb-50 ps-xxl-5 position-relative z-1">
    							<div className="feedback-block-two">
    								<blockquote className="font-garamond">"¡Servicio <span>extraordinario!</span> Soluciones rápidas. Muy recomendado."</blockquote>
    								<div className="d-flex align-items-center mt-75 md-mt-50">
    									<img src="/images/media/img_03.jpg" alt="" className="rounded-circle avatar" />
    									<div className="ps-4">
    										<h6 className="fs-22 mb-5">James Bond.</h6>
    										<span className="opacity-75">CEO y Director de Home Real Estate</span>
    									</div>
    								</div>
    							</div>

    							<div className="wrapper mt-70 xl-mt-50 md-mt-20">
    								<div className="row">
    									<div className="col-sm-6">
    										<div className="counter-block-two dark mt-30">
    											<div className="main-count sm font-garamond fw-500"><span className="counter">1200</span>+</div>
    											<p className="fs-20 m0">Proyectos entregados</p>
    										</div>

    									</div>
    									<div className="col-sm-6">
    										<div className="counter-block-two dark mt-30">
    											<div className="main-count sm font-garamond fw-500"><span className="counter">1.9</span>mil+</div>
    											<p className="fs-20 m0">Clientes felices</p>
    										</div>

    									</div>
    								</div>
    							</div>
    							<img src="/images/lazy.svg" data-src="/images/shape/shape_57.svg" alt="" className="lazy-img shapes shape_01 d-none d-lg-block" />
    						</div>
    					</div>
    					<div className="col-lg-6">
    						<div className="media-gallery position-relative z-1 h-100 wow fadeInLeft">
    							<div className="bg" style={{ backgroundImage: "url(images/media/img_46.jpg)" }}>
    								<img src="/images/lazy.svg" data-src="/images/assets/screen_08.png" alt="" className="lazy-img screen_03" />
    								<img src="/images/lazy.svg" data-src="/images/assets/screen_07.png" alt="" className="lazy-img screen_02" />
    							</div>
    						</div>

    					</div>
    				</div>
    			</div>
    		</div>





    		<div className="fancy-banner-one position-relative z-1 mt-200 xl-mt-150 lg-mt-120 pt-160 xl-pt-140 lg-pt-80 pb-140 xl-pb-120 lg-pb-100">
    			<div className="container container-large">
    				<div className="row">
    					<div className="col-xxl-5 col-lg-6 wow fadeInLeft">
    						<div className="title-one mb-45 lg-mb-30">
    							<h3 className="text-white">Oferta Mensual Exclusiva para ti.</h3>
    							<p className="fs-24 text-white pe-xl-5 me-xxl-5">No te pierdas esta oferta mensual exclusiva y personalizada para ti.</p>
    						</div>

    						<a href="/listing_details_02" className="btn-six rounded-0">Más Detalles</a>
    					</div>
    					<div className="col-lg-6 ms-auto wow fadeInRight">
    						<div className="property-item md-mt-60 rounded-0 position-relative z-1">
    							<div className="row gx-0">
    								<div className="col-md-5 d-flex">
    									<div className="gutter border-right w-100 h-100">
    										<div className="tag mb-20">EN VENTA</div>
    										<h4 className="mb-70 sm-mb-40">Villa de lujo dúplex orkit.</h4>
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






    		<div className="agent-section-one position-relative z-1 mt-170 xl-mt-120">
    			<div className="container container-large">
    				<div className="position-relative">
    					<div className="title-one mb-85 lg-mb-50 wow fadeInLeft">
    						<h3>Nuestros Agentes</h3>
    						<p className="fs-22 mt-xs">Descubre a nuestro equipo de profesionales inmobiliarios dedicados a ti.</p>
    					</div>


    					<div className="wrapper position-relative z-1">
    						<div className="agent-slider-one">
    							<div className="item">
    								<div className="agent-card-one position-relative">
    									<div className="img border-20">
    										<img src="/images/agent/img_01.jpg" alt="" className="w-100 tran5s" />
    									</div>
    									<div className="text-center">
    										<h6>Mark Filo</h6>
    										<a href="#" className="stretched-link">CEO y Fundador</a>
    									</div>
    								</div>

    							</div>
    							<div className="item">
    								<div className="agent-card-one position-relative">
    									<div className="img border-20">
    										<img src="/images/agent/img_02.jpg" alt="" className="w-100 tran5s" />
    									</div>
    									<div className="text-center">
    										<h6>Chris Matial</h6>
    										<a href="#" className="stretched-link">Minorista</a>
    									</div>
    								</div>

    							</div>
    							<div className="item">
    								<div className="agent-card-one position-relative">
    									<div className="img border-20">
    										<img src="/images/agent/img_03.jpg" alt="" className="w-100 tran5s" />
    									</div>
    									<div className="text-center">
    										<h6>Jubayer Al Hasan</h6>
    										<a href="#" className="stretched-link">Experto en Marketing</a>
    									</div>

    								</div>

    							</div>
    							<div className="item">
    								<div className="agent-card-one position-relative">
    									<div className="img border-20">
    										<img src="/images/agent/img_04.jpg" alt="" className="w-100 tran5s" />
    									</div>
    									<div className="text-center">
    										<h6>Jannatul Ferdaus</h6>
    										<a href="#" className="stretched-link">Corredora</a>
    									</div>
    								</div>

    							</div>
    							<div className="item">
    								<div className="agent-card-one position-relative">
    									<div className="img border-20">
    										<img src="/images/agent/img_05.jpg" alt="" className="w-100 tran5s" />
    									</div>
    									<div className="text-center">
    										<h6>Chris Matial</h6>
    										<a href="#" className="stretched-link">Corredor</a>
    									</div>
    								</div>

    							</div>
    						</div>
    					</div>


    					<div className="section-btn text-center md-mt-60">
    						<a href="/agent" className="btn-eight"><span>Conoce a Todo el Equipo</span></a>
    					</div>
    				</div>
    			</div>
    		</div>





    		<div className="feedback-section-six bg-pink-two position-relative z-1 mt-170 xl-mt-120 pt-110 xl-pt-80 pb-100 xl-pb-80">
    			<div className="container container-large">
    				<div className="title-one text-center mb-80 xl-mb-50 md-mb-30">
    					<h3>Feedback de Clientes</h3>
    					<p className="fs-20 mt-xs">La satisfacción del cliente habla más fuerte que nuestras palabras. Escúchalos.</p>
    				</div>

    				<div className="feedback-slider-three">
    					<div className="item">
    						<div className="feedback-block-six">
    							<div className="d-flex justify-content-between align-items-center">
    								<ul className="rating style-none d-flex">
    									<li><i className="fa-sharp fa-solid fa-star"></i></li>
    									<li><i className="fa-sharp fa-solid fa-star"></i></li>
    									<li><i className="fa-sharp fa-solid fa-star"></i></li>
    									<li><i className="fa-sharp fa-solid fa-star"></i></li>
    									<li><i className="fa-sharp fa-solid fa-star"></i></li>
    								</ul>
    								<img src="/images/icon/icon_29.svg" alt="" className="icon" />
    							</div>
    							<blockquote>¡Cambio de juego! Aumentó la eficiencia, simplificó las tareas y ahorró tiempo. ¡Muy recomendado!</blockquote>
    							<div className="d-flex align-items-center justify-content-between">
    								<h6 className="fs-20 m0">Rashed Kabir, <span className="fw-normal opacity-50">California</span></h6>
    								<img src="/images/media/img_01.jpg" alt="" className="rounded-circle avatar" />
    							</div>
    						</div>

    					</div>
    					<div className="item">
    						<div className="feedback-block-six">
    							<div className="d-flex justify-content-between align-items-center">
    								<ul className="rating style-none d-flex">
    									<li><i className="fa-sharp fa-solid fa-star"></i></li>
    									<li><i className="fa-sharp fa-solid fa-star"></i></li>
    									<li><i className="fa-sharp fa-solid fa-star"></i></li>
    									<li><i className="fa-sharp fa-solid fa-star"></i></li>
    									<li><i className="fa-sharp fa-solid fa-star"></i></li>
    								</ul>
    								<img src="/images/icon/icon_29.svg" alt="" className="icon" />
    							</div>
    							<blockquote>Encontramos la casa de nuestros sueños. Excelente negocio con ellos. Simplificó las tareas y ahorró tiempo. Gracias.</blockquote>
    							<div className="d-flex align-items-center justify-content-between">
    								<h6 className="fs-20 m0">Jannat Ferdu, <span className="fw-normal opacity-50">California</span></h6>
    								<img src="/images/media/img_02.jpg" alt="" className="rounded-circle avatar" />
    							</div>
    						</div>

    					</div>
    					<div className="item">
    						<div className="feedback-block-six">
    							<div className="d-flex justify-content-between align-items-center">
    								<ul className="rating style-none d-flex">
    									<li><i className="fa-sharp fa-solid fa-star"></i></li>
    									<li><i className="fa-sharp fa-solid fa-star"></i></li>
    									<li><i className="fa-sharp fa-solid fa-star"></i></li>
    									<li><i className="fa-sharp fa-solid fa-star"></i></li>
    									<li><i className="fa-sharp fa-solid fa-star"></i></li>
    								</ul>
    								<img src="/images/icon/icon_29.svg" alt="" className="icon" />
    							</div>
    							<blockquote>Servicio eficiente y amable, nos guiaron perfectamente. Satisfechos con nuestro nuevo hogar. ¡Gracias!</blockquote>
    							<div className="d-flex align-items-center justify-content-between">
    								<h6 className="fs-20 m0">Jubayer Hasan, <span className="fw-normal opacity-50">California</span></h6>
    								<img src="/images/media/img_03.jpg" alt="" className="rounded-circle avatar" />
    							</div>
    						</div>

    					</div>
    				</div>
    				<img src="/images/lazy.svg" data-src="/images/shape/shape_55.svg" alt="" className="lazy-img shapes shape_01" />
                	<img src="/images/lazy.svg" data-src="/images/shape/shape_56.svg" alt="" className="lazy-img shapes shape_02" />
    			</div>
    		</div>





    		<div className="address-banner wow fadeInUp mt-120 xl-mt-80 mb-140 xl-mb-80">
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






    		<div className="fancy-banner-two position-relative z-1 pt-90 lg-pt-50 pb-90 lg-pb-50">
    			<div className="container">
    				<div className="row align-items-center">
    					<div className="col-lg-6">
    						<div className="title-one text-center text-lg-start md-mb-40 pe-xl-5">
    							<h3 className="text-white m0">Comienza tu Viaje Como Agente Inmobiliario.</h3>
    						</div>

    					</div>
    					<div className="col-lg-6">
    						<div className="form-wrapper me-auto ms-auto me-lg-0">
    							<form action="#">
    								<input type="email" placeholder="Correo electrónico" className="rounded-0" />
    								<button className="rounded-0">Comenzar</button>
    							</form>
    							<div className="fs-16 mt-10 text-white">¿Ya eres un Agente? <a href="#" data-bs-toggle="modal" data-bs-target="#loginModal">Inicia sesión.</a></div>
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

    								<p className="mb-30 xs-mb-20">11910 Clyde Rapid Suite 210, Willyand, Virginia, Estados Unidos</p>
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


    		<button className="scroll-top">
    			<i className="bi bi-arrow-up-short"></i>
    		</button>

    	</div>
    </TemplatePageShell>
  );
}