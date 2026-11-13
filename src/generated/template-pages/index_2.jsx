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




    		<header className="theme-main-menu menu-overlay menu-style-two sticky-menu">
    			<div className="inner-content gap-one">
    				<div className="top-header position-relative">
    					<div className="d-flex align-items-center">
    						<div className="logo order-lg-0">
    							<a href="/" className="d-flex align-items-center">
    								<img src="/images/logo/logo.svg" alt="" />
    							</a>
    						</div>

    						<div className="right-widget ms-auto me-3 me-lg-0 order-lg-3">
    							<ul className="d-flex align-items-center style-none">
    								<li className="d-flex align-items-center login-btn-one">
                                        <i className="fa-regular fa-lock"></i> 
                                        <a href="#" data-bs-toggle="modal" data-bs-target="#loginModal" className="fw-500 tran3s">Iniciar Sesión <span className="d-none d-sm-inline-block">/ Registrarse</span></a>
                                    </li>
    								<li className="d-none d-md-inline-block ms-3 ms-xl-4 me-xl-4">
                                        <a href="/dashboard/add-property" className="btn-two rounded-0" target="_blank" rel="noopener noreferrer"><span>Añadir Propiedad</span> <i className="fa-thin fa-arrow-up-right"></i></a>
                                    </li>
                                    <li className="d-none d-xl-block"><button className="sidenavbtn rounded-circle tran3s" type="button" data-bs-toggle="offcanvas" data-bs-target="#sideNav" aria-controls="sideNav"><i className="fa-sharp fa-light fa-bars-filter"></i></button></li>
    							</ul>
    						</div>
    						<nav className="navbar navbar-expand-lg p0 ms-lg-5 order-lg-2">
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
    										<a href="/dashboard/add-property" className="btn-two w-100 rounded-0" target="_blank" rel="noopener noreferrer"><span>Añadir Propiedad</span> <i className="fa-thin fa-arrow-up-right"></i></a>
    									</li>
    								</ul>
    							</div>
    						</nav>
    					</div>
    				</div> 
    			</div> 
    		</header> 





    		<div className="hero-banner-two z-1 position-relative">
    			<div className="container">
                    <div className="position-relative line-bg pt-200 md-pt-150 pb-130 xl-pb-100">
                        <div className="row">
                            <div className="col-xxl-9 col-xl-8 col-lg-9 col-md-10">
                                <h1 className="hero-heading font-garamond wow fadeInUp">Encuentra el hogar adecuado para tu familia <span><img src="/images/lazy.svg" data-src="/images/shape/shape_11.svg" alt="" className="lazy-img icon d-inline-block" /></span></h1>
                                <p className="fs-24 color-dark pt-35 md-pt-30 pb-35 mb-pb-20 wow fadeInUp" data-wow-delay="0.1s">Tenemos más de 745,000 apartamentos, locales y terrenos.</p>
    							<div className="d-inline-flex align-items-center flex-wrap">
    								<a href="/listing_03" className="btn-seven mb-20 me-4 me-xxl5"><span>Explorar Propiedades</span> <i className="bi bi-arrow-up-right"></i></a>
    								<a className="video-icon tran3s d-flex align-items-center justify-content-center mb-20" data-fancybox href="https://www.youtube.com/embed/aXFSJTjVjw0">
    									<i className="fa-light fa-play"></i>
    									<div className="ps-3 text-start">
    										<span className="d-block">Ver</span>
    										<strong className="fs-20 color-dark fw-normal d-block">Video Intro</strong>
    									</div>
    								</a>
    							</div>
                            </div>
                        </div>
                        <div className="search-wrapper-one layout-two mt-60 lg-mt-40 position-relative">
    						<nav className="search-filter-nav-one d-flex">
                                <div className="nav nav-tabs border-0" role="tablist">
                                    <button className="nav-link active" id="buy-tab" data-bs-toggle="tab" data-bs-target="#buy" type="button" role="tab" aria-controls="buy" aria-selected="true">Comprar</button>
                                    <button className="nav-link" id="rent-tab" data-bs-toggle="tab" data-bs-target="#rent" type="button" role="tab" aria-controls="rent" aria-selected="false">Alquilar</button>
                                </div>
                            </nav>
                            <div className="bg-wrapper border-0 rounded-0">
    							<div className="tab-content">
    								<div className="tab-pane show active" id="buy" role="tabpanel" aria-labelledby="buy-tab" tabIndex="0">
    									<form action="/listing_02">
    										<div className="row gx-0 align-items-center">
    											<div className="col-xl-2 col-md-6">
    												<div className="input-box-one border-left">
    													<div className="label">Busco...</div>
    													<select className="nice-select fw-normal">
    														<option value="1">Comprar Apartamentos</option>
    														<option value="2">Comprar Condominios</option>
    														<option value="3">Comprar Casas</option>
    														<option value="4">Alquilar Industriales</option>
    														<option value="6">Comprar Villas</option>
    													</select>
    												</div>

    											</div>
    											<div className="col-xl-3 col-md-6">
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
    											<div className="col-xl-3 col-md-6">
    												<div className="input-box-one border-left">
    													<div className="label">Palabra clave</div>
    													<input type="text" placeholder="comprar, casa, loft, apartamento" className="type-input" />
    												</div>

    											</div>
    											<div className="col-xl-3 col-md-6">
    												<div className="input-box-one border-left">
    													<div className="label">Rango de Precio</div>
    													<select className="nice-select fw-normal">
    														<option value="1">$10,000 - $200,000</option>
    														<option value="2">$200,000 - $300,000</option>
    														<option value="2">$300,000 - $400,000</option>
    													</select>
    												</div>

    											</div>
    											<div className="col-xl-1">
    												<div className="input-box-one lg-mt-10">
    													<button className="fw-500 text-uppercase tran3s search-btn-two"><i className="fa-light fa-magnifying-glass"></i></button>
    												</div>

    											</div>
    										</div>
    									</form>
    								</div>
    								<div className="tab-pane" id="rent" role="tabpanel" aria-labelledby="rent-tab" tabIndex="0">
    									<form action="/listing_02">
    										<div className="row gx-0 align-items-center">
    											<div className="col-xl-2 col-md-6">
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
    											<div className="col-xl-3 col-md-6">
    												<div className="input-box-one border-left">
    													<div className="label">Ubicación</div>
    													<select className="nice-select location fw-normal">
    														<option value="1">Acapulco, México</option>
    														<option value="2">Dhanmondi, Dhaka</option>
    														<option value="3">Berlín, Alemania</option>
    														<option value="4">Cannes, Francia</option>
    														<option value="5">Delhi, India</option>
    														<option value="6">Giza, Egipto </option>
    														<option value="7">La Habana, Cuba</option>
    													</select>
    												</div>

    											</div>
    											<div className="col-xl-3 col-md-6">
    												<div className="input-box-one border-left">
    													<div className="label">Palabra clave</div>
    													<input type="text" placeholder="alquilar, casa, loft, apartamento" className="type-input" />
    												</div>

    											</div>
    											<div className="col-xl-3 col-md-6">
    												<div className="input-box-one border-left">
    													<div className="label">Rango de Precio</div>
    													<select className="nice-select fw-normal">
    														<option value="1">$10,000 - $200,000</option>
    														<option value="2">$200,000 - $300,000</option>
    														<option value="2">$300,000 - $400,000</option>
    													</select>
    												</div>

    											</div>
    											<div className="col-xl-1">
    												<div className="input-box-one lg-mt-10">
    													<button className="fw-500 text-uppercase tran3s search-btn-two"><i className="fa-light fa-magnifying-glass"></i></button>
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
    			<img src="/images/lazy.svg" data-src="/images/assets/ils_03.png" alt="" className="lazy-img shapes illustration" />
    			<img src="/images/lazy.svg" data-src="/images/shape/shape_12.svg" alt="" className="lazy-img shapes shape_01" />
    			<img src="/images/lazy.svg" data-src="/images/assets/badge_01.svg" alt="" className="lazy-img shapes shape_02" />
    		</div>





    		<div className="feedback-section-two md-pb-40 position-relative z-1">
    			<div className="container">
    				<div className="row">
    					<div className="col-lg-8 order-lg-last">
    						<div className="main-content position-relative z-1">
    							<div className="feedback-block-two">
    								<blockquote className="font-garamond text-white">"¡Rendimiento <span>extraordinario!</span> Soluciones rápidas. Muy recomendado."</blockquote>
    								<div className="d-flex align-items-center mt-75 md-mt-60">
    									<img src="/images/media/img_01.jpg" alt="" className="rounded-circle avatar" />
    									<div className="ps-4">
    										<h6 className="fs-22 text-white fw-normal mb-5">James Bond.</h6>
    										<span className="text-white opacity-50 fw-light">CEO y Director de Home Real Estate</span>
    									</div>
    								</div>
    							</div>

    						</div>
    					</div>
    					<div className="col-lg-4 d-flex order-lg-first">
    						<div className="bg-wrapper h-100 w-100 d-flex flex-column justify-content-center">
    							<div className="row">
    								<div className="col-lg-12 col-md-6">
    									<div className="counter-block-two mb-85 xl-mb-50 md-mb-40">
    										<div className="main-count font-garamond fw-500"><span className="counter">1200</span>+</div>
    										<p className="fs-20 fw-light m0">Proyectos entregados</p>
    									</div>

    								</div>
    								<div className="col-lg-12 col-md-6">
    									<div className="counter-block-two md-mb-40">
    										<div className="main-count font-garamond fw-500"><span className="counter">1.9</span>mil+</div>
    										<p className="fs-20 fw-light m0">Clientes felices</p>
    									</div>

    								</div>
    							</div>
    						</div>

    					</div>
    				</div>
    			</div>
    			<img src="/images/lazy.svg" data-src="/images/shape/shape_14.svg" alt="" className="lazy-img shapes shape_01" />
    			<img src="/images/lazy.svg" data-src="/images/shape/shape_15.svg" alt="" className="lazy-img shapes shape_02" />
    		</div>






    		<div className="property-listing-two position-relative z-1 mt-150 xl-mt-120 pb-150 xl-pb-120 lg-pb-80">
    			<div className="container">
    				<div className="position-relative">
    					<div className="title-one mb-25 lg-mb-20 wow fadeInUp">
    						<h2 className="font-garamond">Nuevas Propiedades</h2>
    						<p className="fs-22 mt-xs">Explora las últimas propiedades en venta y destacadas.</p>
    					</div>


    					<div className="row gx-xxl-5">
    						<div className="col-lg-4 col-md-6 d-flex mt-40 wow fadeInUp">
    							<div className="listing-card-one style-two h-100 w-100">
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
    													<a href="#" className="d-block"><img src="/images/listing/img_07.jpg" className="w-100" alt="..." /></a>
    												</div>
    												<div className="carousel-item" data-bs-interval="1000000">
    													<a href="#" className="d-block"><img src="/images/listing/img_08.jpg" className="w-100" alt="..." /></a>
    												</div>
    												<div className="carousel-item" data-bs-interval="1000000">
    													<a href="#" className="d-block"><img src="/images/listing/img_09.jpg" className="w-100" alt="..." /></a>
    												</div>
    											</div>
    										</div>
    									</div>
    								</div>

    								<div className="property-info p-25">
    									<a href="#" className="title tran3s">Villa Blueberry</a>
    									<div className="address">Mirpur 10, Estadio Dhaka 1208</div>
    									<ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between pb-5">
    										<li className="d-flex align-items-center">
    											<img src="/images/lazy.svg" data-src="/images/icon/icon_04.svg" alt="" className="lazy-img icon me-2" />
    											<span className="fs-16">1370 m²</span>
    										</li>
    										<li className="d-flex align-items-center">
    											<img src="/images/lazy.svg" data-src="/images/icon/icon_05.svg" alt="" className="lazy-img icon me-2" />
    											<span className="fs-16">03 hab</span>
    										</li>
    										<li className="d-flex align-items-center">
    											<img src="/images/lazy.svg" data-src="/images/icon/icon_06.svg" alt="" className="lazy-img icon me-2" />
    											<span className="fs-16">02 baños</span>
    										</li>
    									</ul>
    									<div className="pl-footer top-border d-flex align-items-center justify-content-between">
    										<strong className="price fw-500 color-dark">$34,900.00</strong>
    										<a href="#" className="btn-four"><i className="bi bi-arrow-up-right"></i></a>
    									</div>
    								</div>

    							</div>

    						</div>
    						<div className="col-lg-4 col-md-6 d-flex mt-40 wow fadeInUp" data-wow-delay="0.1s">
    							<div className="listing-card-one style-two h-100 w-100">
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
    													<a href="#" className="d-block"><img src="/images/listing/img_08.jpg" className="w-100" alt="..." /></a>
    												</div>
    												<div className="carousel-item" data-bs-interval="1000000">
    													<a href="#" className="d-block"><img src="/images/listing/img_07.jpg" className="w-100" alt="..." /></a>
    												</div>
    												<div className="carousel-item" data-bs-interval="1000000">
    													<a href="#" className="d-block"><img src="/images/listing/img_09.jpg" className="w-100" alt="..." /></a>
    												</div>
    											</div>
    										</div>
    									</div>
    								</div>

    								<div className="property-info p-25">
    									<a href="#" className="title tran3s">Villa White House</a>
    									<div className="address">Muza link road, ca, usa</div>
    									<ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between pb-5">
    										<li className="d-flex align-items-center">
    											<img src="/images/lazy.svg" data-src="/images/icon/icon_04.svg" alt="" className="lazy-img icon me-2" />
    											<span className="fs-16">1270 m²</span>
    										</li>
    										<li className="d-flex align-items-center">
    											<img src="/images/lazy.svg" data-src="/images/icon/icon_05.svg" alt="" className="lazy-img icon me-2" />
    											<span className="fs-16">02 hab</span>
    										</li>
    										<li className="d-flex align-items-center">
    											<img src="/images/lazy.svg" data-src="/images/icon/icon_06.svg" alt="" className="lazy-img icon me-2" />
    											<span className="fs-16">02 baños</span>
    										</li>
    									</ul>
    									<div className="pl-footer top-border d-flex align-items-center justify-content-between">
    										<strong className="price fw-500 color-dark">$28,100.00</strong>
    										<a href="#" className="btn-four"><i className="bi bi-arrow-up-right"></i></a>
    									</div>
    								</div>

    							</div>

    						</div>
    						<div className="col-lg-4 col-md-6 d-flex mt-40 wow fadeInUp" data-wow-delay="0.2s">
    							<div className="listing-card-one style-two h-100 w-100">
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
    													<a href="#" className="d-block"><img src="/images/listing/img_09.jpg" className="w-100" alt="..." /></a>
    												</div>
    												<div className="carousel-item" data-bs-interval="1000000">
    													<a href="#" className="d-block"><img src="/images/listing/img_08.jpg" className="w-100" alt="..." /></a>
    												</div>
    												<div className="carousel-item" data-bs-interval="1000000">
    													<a href="#" className="d-block"><img src="/images/listing/img_07.jpg" className="w-100" alt="..." /></a>
    												</div>
    											</div>
    										</div>
    									</div>
    								</div>

    								<div className="property-info p-25">
    									<a href="#" className="title tran3s">Villa de lujo en el lago Dal.</a>
    									<div className="address">Mirpur 10, Estadio</div>
    									<ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between pb-5">
    										<li className="d-flex align-items-center">
    											<img src="/images/lazy.svg" data-src="/images/icon/icon_04.svg" alt="" className="lazy-img icon me-2" />
    											<span className="fs-16">1270 m²</span>
    										</li>
    										<li className="d-flex align-items-center">
    											<img src="/images/lazy.svg" data-src="/images/icon/icon_05.svg" alt="" className="lazy-img icon me-2" />
    											<span className="fs-16">02 hab</span>
    										</li>
    										<li className="d-flex align-items-center">
    											<img src="/images/lazy.svg" data-src="/images/icon/icon_06.svg" alt="" className="lazy-img icon me-2" />
    											<span className="fs-16">02 baños</span>
    										</li>
    									</ul>
    									<div className="pl-footer top-border d-flex align-items-center justify-content-between">
    										<strong className="price fw-500 color-dark">$42,500.00</strong>
    										<a href="#" className="btn-four"><i className="bi bi-arrow-up-right"></i></a>
    									</div>
    								</div>

    							</div>

    						</div>
    					</div>

    					<div className="section-btn text-center md-mt-60">
    						<a href="/listing_05" className="btn-eight"><span>Explorar Todo</span> <i className="bi bi-arrow-up-right"></i></a>
    					</div>
    				</div>
    			</div>
    			<img src="/images/lazy.svg" data-src="/images/shape/shape_17.svg" alt="" className="lazy-img shapes shape_01" />
    		</div>





    		<div className="block-feature-six mt-150 xl-mt-100">
    			<div className="container">
    				<div className="position-relative z-1">
    					<div className="row">
    						<div className="col-xl-9 m-auto">
    							<div className="title-one text-center mb-35 lg-mb-20 wow fadeInUp">
    								<h2 className="font-garamond">Explora la Ciudad con Más Propiedades</h2>
    								<p className="fs-22 mt-xs">Te permite buscar las mejores y más recientes propiedades y proyectos en diferentes ubicaciones. Busca por área a continuación para encontrar tu lugar perfecto.</p>
    							</div>

    						</div>
    					</div>

    					<div className="row gx-xxl-5">
    						<div className="col-lg-4 col-md-6 wow fadeInUp">
    							<div className="location-card-two position-relative z-1 d-flex align-items-center justify-content-center mt-30" style={{ backgroundImage: "url(images/media/img_13.jpg)" }}>
    								<div className="content">
    									<h5 className="text-white font-garamond">Kelowna</h5>
    								</div>
    								<a href="/listing_05" className="stretched-link"></a>
    							</div>

    						</div>
    						<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
    							<div className="location-card-two position-relative z-1 d-flex align-items-center justify-content-center mt-30" style={{ backgroundImage: "url(images/media/img_14.jpg)" }}>
    								<div className="content">
    									<h5 className="text-white font-garamond">West Kelowna</h5>
    								</div>
    								<a href="/listing_05" className="stretched-link"></a>
    							</div>

    						</div>
    						<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
    							<div className="location-card-two position-relative z-1 d-flex align-items-center justify-content-center mt-30" style={{ backgroundImage: "url(images/media/img_15.jpg)" }}>
    								<div className="content">
    									<h5 className="text-white font-garamond">Lake Country</h5>
    								</div>
    								<a href="/listing_05" className="stretched-link"></a>
    							</div>

    						</div>
    						<div className="col-lg-4 col-md-6 wow fadeInUp">
    							<div className="location-card-two position-relative z-1 d-flex align-items-center justify-content-center mt-30" style={{ backgroundImage: "url(images/media/img_16.jpg)" }}>
    								<div className="content">
    									<h5 className="text-white font-garamond">Vernon</h5>
    								</div>
    								<a href="/listing_05" className="stretched-link"></a>
    							</div>

    						</div>
    						<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
    							<div className="location-card-two position-relative z-1 d-flex align-items-center justify-content-center mt-30" style={{ backgroundImage: "url(images/media/img_17.jpg)" }}>
    								<div className="content">
    									<h5 className="text-white font-garamond">Peachland</h5>
    								</div>
    								<a href="/listing_05" className="stretched-link"></a>
    							</div>

    						</div>
    						<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
    							<div className="location-card-two position-relative z-1 d-flex align-items-center justify-content-center mt-30" style={{ backgroundImage: "url(images/media/img_18.jpg)" }}>
    								<div className="content">
    									<h5 className="text-white font-garamond">Penticton</h5>
    								</div>
    								<a href="/listing_05" className="stretched-link"></a>
    							</div>

    						</div>
    					</div>
    				</div>
    			</div>
    		</div>





    		<div className="fancy-banner-four position-relative z-1 mt-180 xl-mt-150 lg-mt-120">
    			<div className="container">
    				<div className="bg-line position-relative z-1 pt-110 xl-pt-80 pb-140 xl-pb-100">
    					<div className="row">
    						<div className="col-xl-8 col-lg-9 ms-auto wow fadeInRight">
    							<div className="ps-xxl-5">
    								<div className="title-one mb-50 lg-mb-30">
    									<h2 className="font-garamond fs-xl">Las mejores casas, la combinación perfecta para ti.</h2>
    								</div>

    								<div className="row">
    									<div className="col-lg-4">
    										<img src="/images/lazy.svg" data-src="/images/shape/shape_19.svg" alt="" className="lazy-img ms-auto d-none d-lg-block me-auto mt-20" />
    									</div>
    									<div className="col-lg-8">
    										<p className="fs-24 color-dark">Tenemos más de 745,000 apartamentos y casas en venta, alquiler e hipoteca.</p>
    										<div className="accordion accordion-style-one mt-60" id="accordionOne">
    											<div className="accordion-item">
    												<h2 className="accordion-header">
    													<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
    														Búsqueda Avanzada
    													</button>
    												  </h2>
    												  <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionOne">
    													<div className="accordion-body">
    														<p>Solo toma 5 minutos. La configuración es rápida y sencilla, con filtros totalmente personalizables al correcto.</p>
    													</div>
    												  </div>
    											</div>
    											<div className="accordion-item">
    												<h2 className="accordion-header">
    													<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
    														Agentes Expertos para cualquier ayuda
    													</button>
    												</h2>
    												<div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionOne">
    													<div className="accordion-body">
    														<p>Solo toma 5 minutos. La configuración es rápida y sencilla, con filtros totalmente personalizables al correcto.</p>
    													</div>
    												</div>
    											</div>
    											<div className="accordion-item">
    												<h2 className="accordion-header">
    													<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
    														Pagos protegidos, en todo momento
    													</button>
    												</h2>
    												<div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionOne">
    													<div className="accordion-body">
    														<p>Solo toma 5 minutos. La configuración es rápida y sencilla, con filtros totalmente personalizables al correcto.</p>
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
    			</div>
    			<img src="/images/lazy.svg" data-src="/images/assets/ils_04.png" alt="" className="lazy-img shapes illustration" />
    			<img src="/images/lazy.svg" data-src="/images/assets/screen_02.jpg" alt="" className="lazy-img shapes screen_01" />
    		</div>






    		<div className="block-feature-seven position-relative z-1 mt-150 xl-mt-120">
    			<div className="container">
    				<div className="position-relative">
    					<div className="text-center wow fadeInUp">
    						<div className="title-one mb-30 lg-mb-20">
    							<h2 className="font-garamond">Cómo nuestros clientes se <i>benefician</i> de nosotros</h2>
    							<p className="fs-24 mt-xs">“Excelente servicio, compré la casa de mis sueños rápidamente.”</p>
    						</div>

    						<ul className="rating style-none d-flex justify-content-center">
    							<li><i className="fa-sharp fa-solid fa-star"></i></li>
    							<li><i className="fa-sharp fa-solid fa-star"></i></li>
    							<li><i className="fa-sharp fa-solid fa-star"></i></li>
    							<li><i className="fa-sharp fa-solid fa-star"></i></li>
    							<li><i className="fa-sharp fa-solid fa-star"></i></li>
    							<li><span className="color-dark fw-500">4.7</span> (18k Reseñas)</li>
    						</ul>
    					</div>

    					<div className="wrapper position-relative z-1 mt-45 lg-mt-20 mb-100 lg-mb-50">
    						<div className="row">
    							<div className="col-lg-4 col-md-6 wow fadeInUp">
    								<div className="card-style-two overflow-hidden position-relative z-1 mt-30">
    									<img src="/images/lazy.svg" data-src="/images/media/img_19.jpg" alt="" className="lazy-img w-100 tran5s" />
    									<div className="content text-center">
    										<h5 className="mb-25">Explorar y comprar Casa</h5>
    										<div className="btn tran3s fw-500 text-uppercase">COMPRAR CASA</div>
    										<a href="/listing_03" className="stretched-link"></a>
    									</div>

    								</div>

    							</div>
    							<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
    								<div className="card-style-two overflow-hidden position-relative z-1 mt-30">
    									<img src="/images/lazy.svg" data-src="/images/media/img_20.jpg" alt="" className="lazy-img w-100 tran5s" />
    									<div className="content text-center">
    										<h5 className="mb-25">Publicar y vender rápido</h5>
    										<div className="btn tran3s fw-500 text-uppercase">VENDER AHORA</div>
    										<a href="/listing_03" className="stretched-link"></a>
    									</div>

    								</div>

    							</div>
    							<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
    								<div className="card-style-two overflow-hidden position-relative z-1 mt-30">
    									<img src="/images/lazy.svg" data-src="/images/media/img_21.jpg" alt="" className="lazy-img w-100 tran5s" />
    									<div className="content text-center">
    										<h5 className="mb-25">Descubrir y obtener Alquiler</h5>
    										<div className="btn tran3s fw-500 text-uppercase">ALQUILAR AHORA</div>
    										<a href="/listing_03" className="stretched-link"></a>
    									</div>

    								</div>

    							</div>
    						</div>
    						<img src="/images/lazy.svg" data-src="/images/shape/shape_21.svg" alt="" className="lazy-img shapes shape_01" />
    					</div>


    					<div className="row align-items-center mb-100 lg-mb-50 md-mb-20">
    						<div className="col-xxl-6 col-xl-5 col-lg-8">
    							<div className="title-one">
    								<h2 className="font-garamond m0 lh-1 position-relative">Estamos aquí para ayudarte a encontrar propiedades. <img src="/images/lazy.svg" data-src="/images/shape/shape_22.svg" alt="" className="lazy-img shapes shape_02" /></h2>
    							</div>

    						</div>
    						<div className="col-xxl-4 col-xl-4">
    							<p className="fs-24 m0 color-dark lg-pt-30 lg-pb-50">Tenemos una gran colección de propiedades y más de 745,000 apartamentos, casas en venta y alquiler.</p>
    						</div>
    						<div className="col-xxl-2 col-xl-3 d-inline-flex justify-content-xl-end">
    							<a href="#" className="btn-five text-uppercase rounded-0">Comenzar</a>
    						</div>
    					</div>

    					<div className="row gx-lg-5 align-items-center">
    						<div className="col-lg-3">
    							<div className="card-style-three mt-40 wow fadeInUp">
    								<div className="bg-wrapper text-center">
    									<h3>07+</h3>
    									<p>Años de Experiencia <br />con orgullo.</p>
    								</div>
    							</div>

    						</div>
    						<div className="col-lg-9">
    							<div className="row gx-xl-5">
    								<div className="col-md-4">
    									<div className="card-style-four mt-40 wow fadeInUp">
    										<div className="icon rounded-circle d-flex align-items-center justify-content-center position-relative">
    											<img src="/images/lazy.svg" data-src="/images/icon/icon_11.svg" alt="" className="lazy-img" />
    										</div>
    										<h5 className="mt-35 mb-15">Seguro de Propiedad</h5>
    										<p>Elit esse cillum dolo fugiat nulla tur nos ullamo.</p>
    									</div>

    								</div>
    								<div className="col-md-4">
    									<div className="card-style-four mt-40 wow fadeInUp">
    										<div className="icon rounded-circle d-flex align-items-center justify-content-center position-relative">
    											<img src="/images/lazy.svg" data-src="/images/icon/icon_12.svg" alt="" className="lazy-img" />
    										</div>
    										<h5 className="mt-35 mb-15">Pagos Fáciles</h5>
    										<p>quis nostrud exerct ullamo sucirity finibus ne derived.</p>
    									</div>

    								</div>
    								<div className="col-md-4">
    									<div className="card-style-four mt-40 wow fadeInUp">
    										<div className="icon rounded-circle d-flex align-items-center justify-content-center position-relative">
    											<img src="/images/lazy.svg" data-src="/images/icon/icon_13.svg" alt="" className="lazy-img" />
    										</div>
    										<h5 className="mt-35 mb-15">Proceso Rápido</h5>
    										<p>Duis aute irure dolor reprehe de Cicero's voluptat velit.</p>
    									</div>

    								</div>
    							</div>
    						</div>
    					</div>
    				</div>
    			</div>
    		</div>





    		<div className="feedback-section-three mt-170 xl-mt-150 lg-mt-100">
    			<div className="container">
    				<div className="bg-line position-relative z-1 pt-200 xl-pt-150 lg-pt-80 pb-180 xl-pb-150">
    					<div className="row gx-lg-0">
    						<div className="col-lg-5 col-md-8">
    							<div className="title-one">
    								<div className="upper-title color">FEEDBACK DE CLIENTES</div>
    								<h2 className="font-garamond text-white fs-lg">No confíes en nosotros, confía en nuestros <span className="color">Clientes.</span></h2>
    							</div>

    						</div>
    						<div className="col-lg-6 ms-auto">
    							<div className="feedback-bg-wrapper md-mt-60 position-relative z-1">
    								<div className="icon d-flex align-items-center justify-content-center rounded-circle"><img src="/images/lazy.svg" data-src="/images/icon/icon_14.svg" alt="" className="lazy-img" /></div>
    								<div className="feedback-slider-one">
    									<div className="item">
    										<div className="feedback-block-three">
    											<blockquote>"Excelente servicio, hizo realidad la casa de mis sueños. <span>agencia inmobiliaria muy recomendada</span>!"</blockquote>
    											<div className="d-flex justify-content-end align-items-center">
    												<div className="text-end pe-3 pe-lg-5">
    													<div className="name fs-22 text-white mb-5">Musa Delimuza</div>
    													<div className="fs-18 text-white opacity-75">Milán, Italia</div>
    												</div>
    												<img src="/images/media/img_22.jpg" alt="" className="avatar" />
    											</div>
    										</div>

    									</div>
    									<div className="item">
    										<div className="feedback-block-three">
    											<blockquote>"Excelente servicio, hizo realidad la casa de mis sueños. <span>agencia inmobiliaria muy recomendada</span>!"</blockquote>
    											<div className="d-flex justify-content-end align-items-center">
    												<div className="text-end pe-3 pe-lg-5">
    													<div className="name fs-22 text-white mb-5">Zubayer Hasan</div>
    													<div className="fs-18 text-white opacity-75">Milán, Italia</div>
    												</div>
    												<img src="/images/media/img_23.jpg" alt="" className="avatar" />
    											</div>
    										</div>

    									</div>
    									<div className="item">
    										<div className="feedback-block-three">
    											<blockquote>"Excelente servicio, hizo realidad la casa de mis sueños. <span>agencia inmobiliaria muy recomendada</span>!"</blockquote>
    											<div className="d-flex justify-content-end align-items-center">
    												<div className="text-end pe-3 pe-lg-5">
    													<div className="name fs-22 text-white mb-5">Rashed Ka</div>
    													<div className="fs-18 text-white opacity-75">Milán, Italia</div>
    												</div>
    												<img src="/images/media/img_24.jpg" alt="" className="avatar" />
    											</div>
    										</div>

    									</div>
    								</div>

    								<div className="rating-box">
    									<img src="/images/lazy.svg" data-src="/images/shape/shape_25.svg" alt="" className="lazy-img" />
    									<div className="rate fw-500">9.3 <br /><span>Puntuación</span></div>
    								</div>
    							</div>

    						</div>
    					</div>
    					<img src="/images/lazy.svg" data-src="/images/shape/shape_26.svg" alt="" className="lazy-img shapes shape_01" />
    					<img src="/images/lazy.svg" data-src="/images/shape/shape_27.svg" alt="" className="lazy-img shapes shape_02" />
    				</div>
    			</div>
    			<div className="partner-section-one position-relative z-2">
    				<div className="container">
    					<p className="text-white fs-24"><span>Únete a más de 27,000</span> empresas que han alcanzado </p>
    				</div>
    				<div className="bg-wrapper">
    					<div className="container">
    						<div className="partner-logo-one">
    							<div className="item"><img src="/images/logo/p_logo_01.png" alt="" /></div>
    							<div className="item"><img src="/images/logo/p_logo_02.png" alt="" /></div>
    							<div className="item"><img src="/images/logo/p_logo_03.png" alt="" /></div>
    							<div className="item"><img src="/images/logo/p_logo_04.png" alt="" /></div>
    							<div className="item"><img src="/images/logo/p_logo_05.png" alt="" /></div>
    							<div className="item"><img src="/images/logo/p_logo_06.png" alt="" /></div>
    							<div className="item"><img src="/images/logo/p_logo_03.png" alt="" /></div>
    						</div>
    					</div>
    				</div>
    			</div>
    		</div>





    		<div className="blog-section-one mt-150 xl-mt-120">
    			<div className="container">
    				<div className="position-relative">
    					<div className="title-one mb-35 xl-mb-20 md-mb-10 wow fadeInUp">
    						<h2 className="font-garamond">Últimas Noticias</h2>
    						<p className="fs-20 mt-xs">Obtén las últimas actualizaciones, consejos y trucos de nuestros expertos.</p>
    					</div>


    					<div className="row gx-xl-5">
    						<div className="col-md-6">
    							<article className="blog-meta-one mt-35 wow fadeInUp">
    								<figure className="post-img position-relative m0" style={{ backgroundImage: "url(images/blog/blog_img_01.jpg)" }}>
    									<a href="/blog_details" className="stretched-link date tran3s">09 FEB</a>
    								</figure>
    								<div className="post-data">
    									<div className="post-info"><a href="/blog_details">Rashed Ka .</a> 6 min</div>
    									<div className="d-flex justify-content-between align-items-sm-center flex-wrap">
    										<a href="/blog_details" className="blog-title"><h4>Hábitos de Gasto, 13 Consejos para aumentar tu Dinero.</h4></a>
    										<a href="/blog_details" className="read-btn d-flex align-items-center justify-content-center tran3s"><i className="bi bi-arrow-up-right"></i></a>
    									</div>

    								</div>
    							</article>

    						</div>
    						<div className="col-md-6">
    							<article className="blog-meta-one mt-35 wow fadeInUp" data-wow-delay="0.1s">
    								<figure className="post-img position-relative m0" style={{ backgroundImage: "url(images/blog/blog_img_02.jpg)" }}>
    									<a href="/blog_details" className="stretched-link date tran3s">12 ago</a>
    								</figure>
    								<div className="post-data">
    									<div className="post-info"><a href="/blog_details">Jubayer Hasan .</a> 7 min</div>
    									<div className="d-flex justify-content-between align-items-sm-center flex-wrap">
    										<a href="/blog_details" className="blog-title"><h4>Lista de verificación del diseñador para cada proyecto UX/UI.</h4></a>
    										<a href="/blog_details" className="read-btn d-flex align-items-center justify-content-center tran3s"><i className="bi bi-arrow-up-right"></i></a>
    									</div>

    								</div>
    							</article>

    						</div>
    					</div>

    					<div className="section-btn text-center md-mt-60">
    						<a href="/blog_03" className="btn-eight"><span>Explorar Todo</span> <i className="bi bi-arrow-up-right"></i></a>
    					</div>
    				</div>
    			</div>
    		</div>





    		<div className="faq-section-one position-relative z-1 mt-170 xl-mt-120">
    			<div className="container">
    				<div className="row">
    					<div className="col-lg-5 wow fadeInLeft">
    						<div className="title-one mb-40 lg-mb-20">
    							<h2 className="font-garamond">Preguntas Frecuentes</h2>
    							<p className="fs-20 mt-xs pt-20 md-pt-10">¿No encuentras la respuesta? Podemos ayudarte.</p>
    						</div>

    						<a href="/faq" className="btn-five sm text-uppercase rounded-0">HACER UNA PREGUNTA</a>
    					</div>

    					<div className="col-lg-7">
    						<div className="accordion-style-two md-mt-40">
    							<div className="accordion" id="accordionTwo">
    								<div className="accordion-item">
    									<h2 className="accordion-header">
    										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOneA" aria-expanded="false" aria-controls="collapseOneA">
    											¿Cómo funciona la prueba gratuita?
    										</button>
    									  </h2>
    									  <div id="collapseOneA" className="accordion-collapse collapse" data-bs-parent="#accordionTwo">
    										<div className="accordion-body">
    											<p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo consequat. Duis aute in voluptate nulla pariatur.</p>
    										</div>
    									  </div>
    								</div>
    								<div className="accordion-item">
    									<h2 className="accordion-header">
    										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwoA" aria-expanded="false" aria-controls="collapseTwoA">
    											¿Cómo encontrar diferentes criterios en su proceso?
    										</button>
    									</h2>
    									<div id="collapseTwoA" className="accordion-collapse collapse" data-bs-parent="#accordionTwo">
    										<div className="accordion-body">
    											<p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo consequat. Duis aute in voluptate nulla pariatur.</p>
    										</div>
    									</div>
    								</div>
    								<div className="accordion-item">
    									<h2 className="accordion-header">
    										<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThreeA" aria-expanded="true" aria-controls="collapseThreeA">
    											¿Qué buscas en un equipo fundador?
    										</button>
    									</h2>
    									<div id="collapseThreeA" className="accordion-collapse collapse show" data-bs-parent="#accordionTwo">
    										<div className="accordion-body">
    											<p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo consequat. Duis aute in voluptate nulla pariatur.</p>
    										</div>
    									</div>
    								</div>
    								<div className="accordion-item">
    									<h2 className="accordion-header">
    										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFourA" aria-expanded="false" aria-controls="collapseFourA">
    											¿Recomiendas Pago por uso o Pago anticipado?
    										</button>
    									</h2>
    									<div id="collapseFourA" className="accordion-collapse collapse" data-bs-parent="#accordionTwo">
    										<div className="accordion-body">
    											<p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo consequat. Duis aute in voluptate nulla pariatur.</p>
    										</div>
    									</div>
    								</div>
    							</div>
    						</div>
    					</div>
    				</div>
    			</div>
    			<img src="/images/lazy.svg" data-src="/images/shape/shape_29.svg" alt="" className="lazy-img shapes shape_01" />
    		</div>




    		<div className="fancy-banner-five position-relative z-1 pt-90 lg-pt-70 pb-110 lg-pb-70 mt-170 xl-mt-120">
    			<div className="container">
    				<div className="row">
    					<div className="col-xl-8 m-auto text-center">
    						<div className="title-one mb-40 lg-mb-20">
    							<h2 className="font-garamond fs-xl text-white">¿Tienes alguna duda? Siéntete libre de contactarnos.</h2>
    						</div>
    						<a href="/contact" className="btn-nine text-uppercase"><span>ENVIAR MENSAJE</span></a>
    					</div>
    				</div>
    			</div>
    			<img src="/images/lazy.svg" data-src="/images/shape/shape_30.svg" alt="" className="lazy-img shapes shape_01" />
    		</div>






    		<div className="footer-one dark-bg">
    			<div className="position-relative z-1">
    				<div className="container">
    					<div className="row justify-content-between">
    						<div className="col-lg-4">
    							<div className="footer-intro position-relative z-1">
    								<div className="bg-wrapper">
    									<div className="logo mb-20">
    										<a href="/">
    											<img src="/images/logo/logo.svg" alt="" />
    										</a>
    									</div> 

    									<p className="mb-60 lg-mb-40 md-mb-20">11910 Clyde Rapid Suite 70, Willyand, Virginia, Estados Unidos</p>
    									<h6>CONTACTO</h6>
    									<a href="#" className="email font-garamond tran3s mb-70 lg-mb-50">hola@homerealestate.com</a>
    									<ul className="style-none d-flex align-items-center social-icon">
    										<li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
    										<li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
    										<li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
    									</ul>
    								</div>
    								<img src="/images/lazy.svg" data-src="/images/shape/shape_32.svg" alt="" className="lazy-img shapes shape_01" />
    							</div>
    						</div>
    						<div className="col-lg-8">
    							<div className="d-flex flex-wrap h-100">
    								<div className="footer-nav pt-100 lg-pt-80 xs-pt-50">
    									<h5 className="footer-title text-white">Enlaces</h5>
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
    								<div className="footer-nav pt-100 lg-pt-80 xs-pt-30">
    									<h5 className="footer-title text-white">Legal</h5>
    									<ul className="footer-nav-link style-none">
    										<li><a href="/faq">Términos y condiciones</a></li>
    										<li><a href="/faq">Cookies</a></li>
    										<li><a href="/faq">Política de privacidad</a></li>
    										<li><a href="/faq">Preguntas frecuentes</a></li>
    									</ul>
    								</div>
    								<div className="footer-nav pt-100 lg-pt-80 xs-pt-30">
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
    				</div>
    				<img src="/images/lazy.svg" data-src="/images/shape/shape_33.svg" alt="" className="lazy-img shapes shape_02" />
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