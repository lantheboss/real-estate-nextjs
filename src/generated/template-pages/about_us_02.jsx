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
  "/vendor/isotope.pkgd.min.js",
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




    		<header className="theme-main-menu menu-overlay menu-style-three sticky-menu">
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
                                        <a href="/dashboard/add-property" className="btn-ten" target="_blank" rel="noopener noreferrer"><span>Añadir Propiedad</span> <i className="bi bi-arrow-up-right"></i></a>
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
    										<a href="/dashboard/add-property" className="btn-ten w-100" target="_blank" rel="noopener noreferrer"><span>Añadir Propiedad</span> <i className="bi bi-arrow-up-right"></i></a>
    									</li>
    								</ul>
    							</div>
    						</nav>
    					</div>
    				</div> 
    			</div> 
    		</header> 





    		<div className="inner-banner-three inner-banner text-center z-1 position-relative">
    			<div className="bg-wrapper overflow-hidden position-relative z-1" style={{ backgroundImage: "url(images/media/img_51.jpg)" }}>
                    <div className="container position-relative z-2">
                        <h2 className="mb-35 xl-mb-20 md-mb-10 pt-15 font-garamond text-white">Sobre la Agencia</h2>
                        <ul className="theme-breadcrumb style-none d-inline-flex align-items-center justify-content-center position-relative z-1 bottom-line">
                            <li><a href="#">Inicio</a></li>
                            <li>/</li>
                            <li> Sobre nosotros</li>
                        </ul>
                    </div>
                    <img src="/images/lazy.svg" data-src="/images/shape/shape_35.svg" alt="" className="lazy-img shapes shape_01" />
                    <img src="/images/lazy.svg" data-src="/images/shape/shape_36.svg" alt="" className="lazy-img shapes shape_02" />
                </div>    
    		</div>






    		<div className="block-feature-fifteen mt-150 xl-mt-100 mb-140 xl-mb-80">
    			<div className="container">
    				<div className="row gx-xl-5">
    					<div className="col-xl-6 col-lg-7 order-lg-last wow fadeInRight">
    						<div className="ms-xxl-5 ps-xl-4 ps-lg-5 md-mb-50">
    							<div className="title-one mb-45 lg-mb-20">
    								<h2 className="font-garamond star-shape">Encuentra tu Combinación Preferible Fácilmente. <span className="star-shape"><img src="/images/lazy.svg" data-src="/images/shape/shape_37.svg" alt="" className="lazy-img" /></span></h2>
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

    							<a href="/contact" className="btn-five mt-75 lg-mt-50">Contáctanos</a>
    						</div>
    					</div>
    					<div className="col-xl-6 col-lg-5 d-lg-flex wow fadeInLeft">
    						<div className="media-block h-100 w-100 pe-xl-5">
    							<div className="bg-img position-relative" style={{ backgroundImage: "url(images/media/img_52.jpg)" }}>
    								<img src="/images/lazy.svg" data-src="/images/assets/screen_10.png" alt="" className="lazy-img shapes screen_01" />
    							</div>
    						</div>

    					</div>
    				</div>
    				<div className="wrapper mt-90 lg-mt-40">
    					<div className="row justify-content-center">
    						<div className="col-md-4 col-sm-6">
    							<div className="counter-block-two text-center dark mt-30">
    								<div className="main-count sm font-garamond fw-500"><span className="counter">720</span>k+</div>
    								<p className="fs-20 mt-15 md-mt-10">Proyectos entregados</p>
    							</div>

    						</div>
    						<div className="col-md-4 col-sm-6">
    							<div className="counter-block-two text-center dark mt-30">
    								<div className="main-count sm font-garamond fw-500"><span className="counter">1.3</span>%</div>
    								<p className="fs-20 mt-15 md-mt-10">Bajo Interés</p>
    							</div>

    						</div>
    						<div className="col-md-4 col-sm-6">
    							<div className="counter-block-two text-center dark mt-30">
    								<div className="main-count sm font-garamond fw-500"><span className="counter">1.9</span>mil+</div>
    								<p className="fs-20 mt-15 md-mt-10">Clientes felices</p>
    							</div>

    						</div>
    					</div>
    				</div>
    			</div>

    		</div>




            <div className="block-feature-sixteen">
                <div className="bg-pink-two position-relative z-1 pt-140 xl-pt-100 lg-pt-80 pb-150 xl-pb-120 lg-pb-100">
    				<div className="container">
    					<div className="title-one text-center mb-70 xl-mb-40 lg-mb-20">
    						<h2 className="font-garamond star-shape"><span className="star-shape"><img src="/images/lazy.svg" data-src="/images/shape/shape_37.svg" alt="" className="lazy-img" /></span> Comprar, Alquilar y Vender</h2>
    						<p className="fs-22 mt-xs color-dark">Más de 745K anuncios de apartamentos, lotes y terrenos disponibles hoy.</p>
    					</div>

    					<div className="row justify-content-center gx-xxl-5">
    						<div className="col-lg-4 col-md-6 mt-30 d-flex wow fadeInUp">
    							<div className="card-style-five text-center d-inline-flex flex-column align-items-center tran3s h-100 w-100">
    								<img src="/images/lazy.svg" data-src="/images/icon/icon_23.svg" alt="" className="lazy-img icon" />
    								<h5 className="mt-35 mb-20">Comprar una casa</h5>
    								<p className="fs-22 mb-50">Explora los más de 2 millones de hogares de Home Real Estate y descubre tu espacio ideal para vivir.</p>
    								<a href="/listing_10" className="btn-twelve mt-auto">Encontrar Casa</a>
    							</div>

    						</div>
    						<div className="col-lg-4 col-md-6 mt-30 d-flex wow fadeInUp" data-wow-delay="0.1s">
    							<div className="card-style-five text-center d-inline-flex flex-column align-items-center tran3s h-100 w-100">
    								<img src="/images/lazy.svg" data-src="/images/icon/icon_24.svg" alt="" className="lazy-img icon" />
    								<h5 className="mt-35 mb-20">Alquilar una casa</h5>
    								<p className="fs-22 mb-50">Descubre un alquiler que te encantará en Home Real Estate, gracias a más de 35 filtros y palabras clave adaptadas.</p>
    								<a href="/listing_10" className="btn-twelve mt-auto">Alquilar Casa</a>
    							</div>

    						</div>
    						<div className="col-lg-4 col-md-6 mt-30 d-flex wow fadeInUp" data-wow-delay="0.2s">
    							<div className="card-style-five text-center d-inline-flex flex-column align-items-center tran3s h-100 w-100">
    								<img src="/images/lazy.svg" data-src="/images/icon/icon_25.svg" alt="" className="lazy-img icon" />
    								<h5 className="mt-35 mb-20">Vender una propiedad</h5>
    								<p className="fs-22 mb-50">Publica, vende y prospera con nuestra excelente agencia inmobiliaria. Es muy fácil y divertido.</p>
    								<a href="/listing_10" className="btn-twelve mt-auto">Vender Propiedad</a>
    							</div>

    						</div>
    					</div>
    				</div>
    				<img src="/images/lazy.svg" data-src="/images/shape/shape_71.svg" alt="" className="lazy-img shapes shape_01 wow fadeInDown" />
    				<img src="/images/lazy.svg" data-src="/images/shape/shape_39.svg" alt="" className="lazy-img shapes shape_02 wow fadeInUp" />
    			</div>
    			<div className="block-feature-fourteen pt-150 xl-pt-120 lg-pt-100 pb-150 xl-pb-120 lg-pb-80">
    				<div className="container">
    					<div className="row">
    						<div className="col-lg-6">
    							<div className="title-one md-mb-30 pe-xxl-4 wow fadeInLeft">
    								<h2 className="font-garamond text-white star-shape">Compra, Vende o Alquila propiedades fácilmente. <span className="star-shape"><img src="/images/lazy.svg" data-src="/images/shape/shape_37.svg" alt="" className="lazy-img" /></span></h2>
    							</div>

    						</div>
    						<div className="col-xxl-5 col-lg-6 ms-auto">
    							<p className="text-white fs-24 m0 lh-lg  wow fadeInRight">Tu principal defensor inmobiliario, transformando casas en sueños. Confía en nosotros para guiarte a casa con experiencia</p>
    						</div>
    					</div>

    					<div className="wow fadeInUp mt-70 xl-mt-50">
    						<div className="row">
    							<div className="col-lg-4">
    								<div className="card-style-eight mt-45 wow fadeInUp">
    									<div className="d-flex pe-xxl-5">
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
    									<div className="d-flex pe-xxl-2 ps-xxl-2">
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
    									<div className="d-flex ps-xxl-5">
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
    				<div className="wrapper">
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




    		<div className="fancy-banner-eight wow fadeInUp mt-160 xl-mt-100 mb-120 xl-mb-100 lg-mb-80">
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





    		<div className="footer-two">
    			<div className="container container-large">
    				<div className="bg-wrapper position-relative z-1">
    					<div className="news-letter-area">
    						<div className="row align-items-center">
    							<div className="col-lg-6">
    								<div className="text-center text-lg-start md-mb-20">
    									<h2>Nuestro Boletín</h2>
    									<p className="fs-20 m0">Recibe noticias al instante suscribiéndote a nuestro boletín</p>
    								</div>
    							</div>
    							<div className="col-lg-6">
    								<div className="form-wrapper me-auto ms-auto me-lg-0">
    									<form action="#">
    										<input type="email" placeholder="Tu correo electrónico" />
    										<button><i className="fa-light fa-arrow-right-long"></i></button>
    									</form>
    								</div>
    							</div>
    						</div>
    					</div>

    					<div className="row justify-content-between">
    						<div className="col-xl-3">
    							<div className="footer-intro position-relative z-1 pt-70 pb-150 lg-pb-20">
    								<div className="logo mb-15">
    									<a href="/">
    										<img src="/images/logo/logo.svg" alt="" />
    									</a>
    								</div> 

    								<p className="mb-45 lg-mb-30 pe-2 pe-lg-5">11910 Clyde Rapid Suite 210, Wil, Virginia, EE. UU.</p>
    								<ul className="style-none contact-info">
    									<li className="d-flex align-items-center">
    										<img src="/images/icon/icon_30.svg" alt="" width="20" />
    										<a href="#">hola@homerealestate.com</a>
    									</li>
    									<li className="d-flex align-items-center">
    										<img src="/images/icon/icon_31.svg" alt="" width="20" />
    										<a href="#">+757 699-4478</a>
    									</li>
    								</ul>
    								<ul className="style-none d-flex align-items-center social-icon">
    									<li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
    									<li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
    									<li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
    								</ul>
    								<img src="/images/lazy.svg" data-src="/images/shape/shape_46.svg" alt="" className="lazy-img shapes shape_01 d-none d-xl-block" />
    							</div>
    						</div>
    						<div className="col-xl-9">
    							<div className="ms-xxl-5 ps-xl-5 mt-200 lg-mt-20">
    								<div className="row justify-content-between">
    									<div className="col-lg-3 col-md-4">
    										<div className="footer-nav pt-30">
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
    									<div className="col-xxl-3 col-xl-4 col-lg-3 col-md-4">
    										<div className="footer-nav pt-30">
    											<h5 className="footer-title">Legal</h5>
    											<ul className="footer-nav-link style-none">
    												<li><a href="/faq">Términos y condiciones</a></li>
    												<li><a href="/faq">Cookies</a></li>
    												<li><a href="/faq">Política de privacidad</a></li>
    												<li><a href="/faq">Preguntas frecuentes</a></li>
    											</ul>
    										</div>
    									</div>
    									<div className="col-lg-3 col-md-4">
    										<div className="footer-nav pt-30">
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
    									<div className="col-xxl-3 col-lg-2 d-none d-lg-block">
    										<img src="/images/lazy.svg" data-src="/images/shape/shape_47.svg" alt="" className="lazy-img mt-50" />
    									</div>
    								</div>
    							</div>
    						</div>
    					</div>
    				</div>

    				<div className="bottom-footer">
    					<div className="d-md-flex justify-content-center justify-content-md-between align-items-center">
    						<ul className="style-none bottom-nav d-flex flex-wrap justify-content-center">
    							<li><a href="/faq">Privacidad y Términos</a></li>
    							<li><a href="/faq">Cookies</a></li>
    							<li><a href="/contact">Contáctanos</a></li>
    						</ul>
    						<p className="mb-15 text-center text-lg-start order-md-first">Copyright @2024 Home Real Estate.</p>
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