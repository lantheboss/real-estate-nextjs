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





    		<div className="property-listing-six bg-pink-two pt-110 md-pt-80 pb-150 xl-pb-120 mt-150 xl-mt-120">
    			<div className="container container-large">
    				<div className="row">
                        <div className="col-lg-8">
                            <div className="ps-xxl-5">
                                <div className="listing-header-filter d-sm-flex justify-content-between align-items-center mb-40 lg-mb-30">
    								<div>Mostrando <span className="color-dark fw-500">1–8</span> de <span className="color-dark fw-500">1.230</span> resultados</div>
    								<div className="d-flex align-items-center xs-mt-20">
    									<div className="short-filter d-flex align-items-center">
    										<div className="fs-16 me-2">Ordenar por:</div>
    										<select className="nice-select">
    											<option value="0">Más Recientes</option>
    											<option value="1">Mejor Vendidos</option>
    											<option value="2">Mejor Coincidencia</option>
                                                <option value="3">Precio Bajo</option>
                                                <option value="4">Precio Alto</option>
    										</select>
    									</div>
    									<a href="/listing_02" className="tran3s layout-change rounded-circle ms-auto ms-sm-3" data-bs-toggle="tooltip" title="Cambiar a Vista de Lista"><i className="fa-regular fa-bars"></i></a>
    								</div>
    							</div>


                                <div className="row gx-xxl-5">
                                    <div className="col-md-6 d-flex mb-50 wow fadeInUp">
                                        <div className="listing-card-one border-25 h-100 w-100">
                                            <div className="img-gallery p-15">
                                                <div className="position-relative border-25 overflow-hidden">
                                                    <div className="tag border-25">EN ALQUILER</div>
                                                    <a href="#" className="fav-btn tran3s"><i className="fa-light fa-heart"></i></a>
                                                    <div id="carousel1" className="carousel slide">
                                                        <div className="carousel-indicators">
                                                            <button type="button" data-bs-target="#carousel1" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                                            <button type="button" data-bs-target="#carousel1" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                            <button type="button" data-bs-target="#carousel1" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                                        </div>
                                                        <div className="carousel-inner">
                                                            <div className="carousel-item active" data-bs-interval="1000000">
                                                                <a href="#" className="d-block"><img src="/images/listing/img_01.jpg" className="w-100" alt="..." /></a>
                                                            </div>
                                                            <div className="carousel-item" data-bs-interval="1000000">
                                                                <a href="#" className="d-block"><img src="/images/listing/img_01.jpg" className="w-100" alt="..." /></a>
                                                            </div>
                                                            <div className="carousel-item" data-bs-interval="1000000">
                                                                <a href="#" className="d-block"><img src="/images/listing/img_01.jpg" className="w-100" alt="..." /></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="property-info p-25">
                                                <a href="/listing_details_01" className="title tran3s">Villa Blueberry</a>
                                                <div className="address">Mirpur 10, Estadio Dhaka 1208</div>
                                                <ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between">
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
                                                    <strong className="price fw-500 color-dark">$3,280/<sub>m</sub></strong>
                                                    <a href="/listing_details_01" className="btn-four rounded-circle"><i className="bi bi-arrow-up-right"></i></a>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                    <div className="col-md-6 d-flex mb-50 wow fadeInUp" data-wow-delay="0.1s">
                                        <div className="listing-card-one border-25 h-100 w-100">
                                            <div className="img-gallery p-15">
                                                <div className="position-relative border-25 overflow-hidden">
                                                    <div className="tag sale border-25">EN VENTA</div>
                                                    <a href="#" className="fav-btn tran3s"><i className="fa-light fa-heart"></i></a>
                                                    <div id="carousel2" className="carousel slide">
                                                        <div className="carousel-indicators">
                                                            <button type="button" data-bs-target="#carousel2" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                                            <button type="button" data-bs-target="#carousel2" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                            <button type="button" data-bs-target="#carousel2" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                                        </div>
                                                        <div className="carousel-inner">
                                                            <div className="carousel-item active" data-bs-interval="1000000">
                                                                <a href="#" className="d-block"><img src="/images/listing/img_02.jpg" className="w-100" alt="..." /></a>
                                                            </div>
                                                            <div className="carousel-item" data-bs-interval="1000000">
                                                                <a href="#" className="d-block"><img src="/images/listing/img_03.jpg" className="w-100" alt="..." /></a>
                                                            </div>
                                                            <div className="carousel-item" data-bs-interval="1000000">
                                                                <a href="#" className="d-block"><img src="/images/listing/img_01.jpg" className="w-100" alt="..." /></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="property-info p-25">
                                                <a href="/listing_details_01" className="title tran3s">Villa White House</a>
                                                <div className="address">Muza link road, ca, usa</div>
                                                <ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between">
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
                                                    <a href="/listing_details_01" className="btn-four rounded-circle"><i className="bi bi-arrow-up-right"></i></a>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                    <div className="col-md-6 d-flex mb-50 wow fadeInUp">
                                        <div className="listing-card-one border-25 h-100 w-100">
                                            <div className="img-gallery p-15">
                                                <div className="position-relative border-25 overflow-hidden">
                                                    <div className="tag sale border-25">EN VENTA</div>
                                                    <a href="#" className="fav-btn tran3s"><i className="fa-light fa-heart"></i></a>
                                                    <div id="carousel3" className="carousel slide">
                                                        <div className="carousel-indicators">
                                                            <button type="button" data-bs-target="#carousel3" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                                            <button type="button" data-bs-target="#carousel3" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                            <button type="button" data-bs-target="#carousel3" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                                        </div>
                                                        <div className="carousel-inner">
                                                            <div className="carousel-item active" data-bs-interval="1000000">
                                                                <a href="#" className="d-block"><img src="/images/listing/img_03.jpg" className="w-100" alt="..." /></a>
                                                            </div>
                                                            <div className="carousel-item" data-bs-interval="1000000">
                                                                <a href="#" className="d-block"><img src="/images/listing/img_02.jpg" className="w-100" alt="..." /></a>
                                                            </div>
                                                            <div className="carousel-item" data-bs-interval="1000000">
                                                                <a href="#" className="d-block"><img src="/images/listing/img_01.jpg" className="w-100" alt="..." /></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="property-info p-25">
                                                <a href="/listing_details_01" className="title tran3s">Villa de lujo en el lago Dal.</a>
                                                <div className="address">Mirpur 10, Estadio</div>
                                                <ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between">
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
                                                    <a href="/listing_details_01" className="btn-four rounded-circle"><i className="bi bi-arrow-up-right"></i></a>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                    <div className="col-md-6 d-flex mb-50 wow fadeInUp" data-wow-delay="0.1s">
                                        <div className="listing-card-one border-25 h-100 w-100">
                                            <div className="img-gallery p-15">
                                                <div className="position-relative border-25 overflow-hidden">
                                                    <div className="tag border-25">EN ALQUILER</div>
                                                    <a href="#" className="fav-btn tran3s"><i className="fa-light fa-heart"></i></a>
                                                    <div id="carousel4" className="carousel slide">
                                                        <div className="carousel-indicators">
                                                            <button type="button" data-bs-target="#carousel4" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                                            <button type="button" data-bs-target="#carousel4" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                            <button type="button" data-bs-target="#carousel4" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                                        </div>
                                                        <div className="carousel-inner">
                                                            <div className="carousel-item active" data-bs-interval="1000000">
                                                                <a href="#" className="d-block"><img src="/images/listing/img_04.jpg" className="w-100" alt="..." /></a>
                                                            </div>
                                                            <div className="carousel-item" data-bs-interval="1000000">
                                                                <a href="#" className="d-block"><img src="/images/listing/img_01.jpg" className="w-100" alt="..." /></a>
                                                            </div>
                                                            <div className="carousel-item" data-bs-interval="1000000">
                                                                <a href="#" className="d-block"><img src="/images/listing/img_02.jpg" className="w-100" alt="..." /></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="property-info p-25">
                                                <a href="/listing_details_01" className="title tran3s">Villa Blueberry</a>
                                                <div className="address">Mirpur 10, Estadio Dhaka 1208</div>
                                                <ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between">
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
                                                    <strong className="price fw-500 color-dark">$3,280/<sub>m</sub></strong>
                                                    <a href="/listing_details_01" className="btn-four rounded-circle"><i className="bi bi-arrow-up-right"></i></a>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                    <div className="col-md-6 d-flex mb-50 wow fadeInUp">
                                        <div className="listing-card-one border-25 h-100 w-100">
                                            <div className="img-gallery p-15">
                                                <div className="position-relative border-25 overflow-hidden">
                                                    <div className="tag sale border-25">EN VENTA</div>
                                                    <a href="#" className="fav-btn tran3s"><i className="fa-light fa-heart"></i></a>
                                                    <div id="carousel5" className="carousel slide">
                                                        <div className="carousel-indicators">
                                                            <button type="button" data-bs-target="#carousel5" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                                            <button type="button" data-bs-target="#carousel5" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                            <button type="button" data-bs-target="#carousel5" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                                        </div>
                                                        <div className="carousel-inner">
                                                            <div className="carousel-item active" data-bs-interval="1000000">
                                                                <a href="#" className="d-block"><img src="/images/listing/img_05.jpg" className="w-100" alt="..." /></a>
                                                            </div>
                                                            <div className="carousel-item" data-bs-interval="1000000">
                                                                <a href="#" className="d-block"><img src="/images/listing/img_03.jpg" className="w-100" alt="..." /></a>
                                                            </div>
                                                            <div className="carousel-item" data-bs-interval="1000000">
                                                                <a href="#" className="d-block"><img src="/images/listing/img_01.jpg" className="w-100" alt="..." /></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="property-info p-25">
                                                <a href="/listing_details_01" className="title tran3s">Villa White House</a>
                                                <div className="address">Muza link road, ca, usa</div>
                                                <ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between">
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
                                                    <a href="/listing_details_01" className="btn-four rounded-circle"><i className="bi bi-arrow-up-right"></i></a>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                    <div className="col-md-6 d-flex mb-50 wow fadeInUp" data-wow-delay="0.1s">
                                        <div className="listing-card-one border-25 h-100 w-100">
                                            <div className="img-gallery p-15">
                                                <div className="position-relative border-25 overflow-hidden">
                                                    <div className="tag border-25">EN ALQUILER</div>
                                                    <a href="#" className="fav-btn tran3s"><i className="fa-light fa-heart"></i></a>
                                                    <div id="carousel6" className="carousel slide">
                                                        <div className="carousel-indicators">
                                                            <button type="button" data-bs-target="#carousel6" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                                            <button type="button" data-bs-target="#carousel6" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                            <button type="button" data-bs-target="#carousel6" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                                        </div>
                                                        <div className="carousel-inner">
                                                            <div className="carousel-item active" data-bs-interval="1000000">
                                                                <a href="#" className="d-block"><img src="/images/listing/img_06.jpg" className="w-100" alt="..." /></a>
                                                            </div>
                                                            <div className="carousel-item" data-bs-interval="1000000">
                                                                <a href="#" className="d-block"><img src="/images/listing/img_04.jpg" className="w-100" alt="..." /></a>
                                                            </div>
                                                            <div className="carousel-item" data-bs-interval="1000000">
                                                                <a href="#" className="d-block"><img src="/images/listing/img_01.jpg" className="w-100" alt="..." /></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="property-info p-25">
                                                <a href="/listing_details_01" className="title tran3s">Villa de lujo en el lago Dal.</a>
                                                <div className="address">Mirpur 10, Estadio</div>
                                                <ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between">
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
                                                    <strong className="price fw-500 color-dark">$3,280/<sub>m</sub></strong>
                                                    <a href="/listing_details_01" className="btn-four rounded-circle"><i className="bi bi-arrow-up-right"></i></a>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                    <div className="col-md-6 d-flex mb-50 wow fadeInUp">
                                        <div className="listing-card-one border-25 h-100 w-100">
                                            <div className="img-gallery p-15">
                                                <div className="position-relative border-25 overflow-hidden">
                                                    <div className="tag border-25">EN ALQUILER</div>
                                                    <a href="#" className="fav-btn tran3s"><i className="fa-light fa-heart"></i></a>
                                                    <div id="carousel7" className="carousel slide">
                                                        <div className="carousel-indicators">
                                                            <button type="button" data-bs-target="#carousel7" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                                            <button type="button" data-bs-target="#carousel7" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                            <button type="button" data-bs-target="#carousel7" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                                        </div>
                                                        <div className="carousel-inner">
                                                            <div className="carousel-item active" data-bs-interval="1000000">
                                                                <a href="#" className="d-block"><img src="/images/listing/img_27.jpg" className="w-100" alt="..." /></a>
                                                            </div>
                                                            <div className="carousel-item" data-bs-interval="1000000">
                                                                <a href="#" className="d-block"><img src="/images/listing/img_04.jpg" className="w-100" alt="..." /></a>
                                                            </div>
                                                            <div className="carousel-item" data-bs-interval="1000000">
                                                                <a href="#" className="d-block"><img src="/images/listing/img_01.jpg" className="w-100" alt="..." /></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="property-info p-25">
                                                <a href="/listing_details_01" className="title tran3s">Villa Blueberry</a>
                                                <div className="address">Mirpur 10, Estadio Dhaka 1208</div>
                                                <ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between">
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
                                                    <strong className="price fw-500 color-dark">$3,280/<sub>m</sub></strong>
                                                    <a href="/listing_details_01" className="btn-four rounded-circle"><i className="bi bi-arrow-up-right"></i></a>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                    <div className="col-md-6 d-flex mb-50 wow fadeInUp" data-wow-delay="0.1s">
                                        <div className="listing-card-one border-25 h-100 w-100">
                                            <div className="img-gallery p-15">
                                                <div className="position-relative border-25 overflow-hidden">
                                                    <div className="tag sale border-25">EN VENTA</div>
                                                    <a href="#" className="fav-btn tran3s"><i className="fa-light fa-heart"></i></a>
                                                    <div id="carousel8" className="carousel slide">
                                                        <div className="carousel-indicators">
                                                            <button type="button" data-bs-target="#carousel8" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                                            <button type="button" data-bs-target="#carousel8" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                            <button type="button" data-bs-target="#carousel8" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                                        </div>
                                                        <div className="carousel-inner">
                                                            <div className="carousel-item active" data-bs-interval="1000000">
                                                                <a href="#" className="d-block"><img src="/images/listing/img_26.jpg" className="w-100" alt="..." /></a>
                                                            </div>
                                                            <div className="carousel-item" data-bs-interval="1000000">
                                                                <a href="#" className="d-block"><img src="/images/listing/img_03.jpg" className="w-100" alt="..." /></a>
                                                            </div>
                                                            <div className="carousel-item" data-bs-interval="1000000">
                                                                <a href="#" className="d-block"><img src="/images/listing/img_01.jpg" className="w-100" alt="..." /></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="property-info p-25">
                                                <a href="/listing_details_01" className="title tran3s">Villa White House</a>
                                                <div className="address">Muza link road, ca, usa</div>
                                                <ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between">
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
                                                    <strong className="price fw-500 color-dark">$21,000.00</strong>
                                                    <a href="/listing_details_01" className="btn-four rounded-circle"><i className="bi bi-arrow-up-right"></i></a>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                                <ul className="pagination-one d-flex align-items-center justify-content-center justify-content-sm-start style-none pt-30">
                                    <li><a href="#">1</a></li>
                                    <li className="active"><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li><a href="#">4</a></li>
                                    <li>....</li>
                                    <li className="ms-2"><a href="#" className="d-flex align-items-center">Último <img src="/images/icon/icon_46.svg" alt="" className="ms-2" /></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 order-lg-first">
                            <div className="advance-search-panel dot-bg md-mt-80">
                                <div className="main-bg">
                                    <form action="#">
                                        <div className="row gx-lg-5">
                                            <div className="col-12">
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
                                            <div className="col-12">
                                                <div className="input-box-one mb-35">
                                                    <div className="label">Palabra clave</div>
                                                    <input type="text" placeholder="comprar, casa, loft, apartamento" className="type-input" />
                                                </div>

                                            </div>
                                            <div className="col-12">
                                                <div className="input-box-one mb-50">
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
                                            <div className="col-sm-6">
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
                                            <div className="col-sm-6">
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
                                            <div className="col-12">
                                                <h6 className="block-title fw-bold mt-25 mb-15">Rango de precio</h6>
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
                                            <div className="col-12">
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





    		<div className="fancy-banner-two position-relative z-1 pt-90 lg-pt-50 pb-90 lg-pb-50">
    			<div className="container">
    				<div className="row align-items-center">
    					<div className="col-lg-6">
    						<div className="title-one text-center text-lg-start md-mb-40 pe-xl-5">
    							<h3 className="text-white m0">Comienza tu <span>Viaje<img src="/images/lazy.svg" data-src="/images/shape/title_shape_06.svg" alt="" className="lazy-img" /></span> Como Agente Inmobiliario.</h3>
    						</div>

    					</div>
    					<div className="col-lg-6">
    						<div className="form-wrapper me-auto ms-auto me-lg-0">
    							<form action="#">
    								<input type="email" placeholder="Correo electrónico" />
    								<button>Comenzar</button>
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



    		<button className="scroll-top">
    			<i className="bi bi-arrow-up-short"></i>
    		</button>

    	</div>
    </TemplatePageShell>
  );
}