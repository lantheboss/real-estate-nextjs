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





    		<div className="inner-banner-one inner-banner bg-pink text-center z-1 pt-160 lg-pt-130 pb-160 xl-pb-120 md-pb-80 position-relative">
    			<div className="container">
                    <h3 className="mb-35 xl-mb-20 pt-15">Sobre la Agencia</h3>
                    <ul className="theme-breadcrumb style-none d-inline-flex align-items-center justify-content-center position-relative z-1 bottom-line">
                        <li><a href="/">Inicio</a></li>
                        <li>/</li>
                        <li> Sobre nosotros</li>
                    </ul>
    			</div>
    			<img src="/images/lazy.svg" data-src="/images/assets/ils_07.svg" alt="" className="lazy-img shapes w-100 illustration" />
    		</div>






    		<div className="block-feature-two mt-150 xl-mt-100">
    			<div className="container">
    				<div className="row gx-xl-5">
    					<div className="col-lg-6 wow fadeInLeft">
    						<div className="me-xxl-4">
                                <div className="title-one mb-60 lg-mb-40">
                                    <div className="upper-title">Sobre nosotros</div>
                                    <h3>Asegura la casa de los sueños <span>de tu familia<img src="/images/lazy.svg" data-src="/images/shape/title_shape_06.svg" alt="" className="lazy-img" /></span></h3>
                                    <p className="fs-22">Nuestros fundadores Dustin Moskovitz y Justin Rosenstein se conocieron mientras lideraban Ingeniería.</p>
                                </div>

                                <a href="/contact" className="btn-two">Contáctanos</a>
                                <div className="counter-wrapper border-top pt-40 md-pt-10 mt-65 md-mt-40">
                                    <div className="row">
                                        <div className="col-xxl-6 col-sm-5">
                                            <div className="counter-block-one mt-20">
                                                <div className="main-count fw-500 color-dark"><span className="counter">1.2</span>%</div>
                                                <span>Baja tasa de interés</span>
                                            </div>

                                        </div>
                                        <div className="col-xxl-6 col-sm-7">
                                            <div className="counter-block-one mt-20">
                                                <div className="main-count fw-500 color-dark">$<span className="counter">1.3</span>mil+</div>
                                                <span>Volumen de negociación acumulado</span>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
    					</div>
    					<div className="col-lg-6 wow fadeInRight">
    						<div className="block-two md-mt-40">
    							<div className="bg-wrapper">
    								<h5>¿Quiénes somos?</h5>
    								<p className="fs-22 lh-lg mt-20">Nuestros fundadores Dustin Moskovitz y Justin Rosenstein se conocieron mientras lideraban los equipos de Ingeniería en Facebook. A medida que las operaciones crecían, se frustraron por lo difícil que era coordinar.</p>
    								<h5 className="top-line">Nuestra Misión </h5>
    								<p className="fs-22 lh-lg mt-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore aliqua. </p>
    							</div>

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




    		<div className="block-feature-five position-relative z-1 pt-170 xl-pt-120 pb-130 xl-pb-100 lg-pb-80">
    			<div className="container">
    				<div className="row">
    					<div className="col-xl-8 m-auto">
    						<div className="title-one text-center mb-35 lg-mb-20">
    							<h3>Estamos aquí para ayudarte <br /> a conseguir la <span>casa de tus sueños<img src="/images/lazy.svg" data-src="/images/shape/title_shape_07.svg" alt="" className="lazy-img" /></span></h3>
    							<p className="fs-24 color-dark">Es fácil empezar con nosotros con estos sencillos pasos</p>
    						</div>

    					</div>
    				</div>
    				<div className="row justify-content-between">
    					<div className="col-xxl-11 m-auto">
    						<div className="row gx-xl-5 justify-content-center">
    							<div className="col-lg-4 col-sm-6">
    								<div className="card-style-one text-center wow fadeInUp mt-40">
    									<img src="/images/lazy.svg" data-src="/images/icon/icon_07.svg" alt="" className="lazy-img m-auto icon" />
    									<h5 className="mt-50 lg-mt-30 mb-15">Crear una Cuenta</h5>
    									<p className="pe-xxl-4 ps-xxl-4">Es muy fácil abrir una cuenta y comenzar tu viaje.</p>
    								</div>

    							</div>
    							<div className="col-lg-4 col-sm-6">
    								<div className="card-style-one text-center wow fadeInUp mt-40 arrow position-relative" data-wow-delay="0.1s">
    									<img src="/images/lazy.svg" data-src="/images/icon/icon_08.svg" alt="" className="lazy-img m-auto icon" />
    									<h5 className="mt-50 lg-mt-30 mb-15">Encontrar un Hogar</h5>
    									<p className="pe-xxl-4 ps-xxl-4">Completa tu perfil con toda la información para llamar la atención del cliente.</p>
    								</div>

    							</div>
    							<div className="col-lg-4 col-sm-6">
    								<div className="card-style-one text-center wow fadeInUp mt-40" data-wow-delay="0.2s">
    									<img src="/images/lazy.svg" data-src="/images/icon/icon_09.svg" alt="" className="lazy-img m-auto icon" />
    									<h5 className="mt-50 lg-mt-30 mb-15">Proceso Rápido</h5>
    									<p className="pe-xxl-4 ps-xxl-4">Aplica y consigue tus trabajos preferidos con todos los requisitos y listo.</p>
    								</div>

    							</div>
    						</div>
    					</div>
    				</div>
    			</div>
    			<img src="/images/lazy.svg" data-src="/images/shape/shape_07.svg" alt="" className="lazy-img shapes shape_01" />
    			<img src="/images/lazy.svg" data-src="/images/shape/shape_08.svg" alt="" className="lazy-img shapes shape_02" />
    		</div>






    		<div className="feedback-section-six bg-pink-two position-relative z-1 pt-110 xl-pt-80 pb-100 xl-pb-80">
    			<div className="container">
    				<div className="title-one text-center mb-80 xl-mb-50 md-mb-30">
    					<h3>Feedback de Clientes</h3>
    					<p className="fs-20 mt-xs">La satisfacción del cliente habla más fuerte que nuestras palabras. Escúchalos.</p>
    				</div>

    				<div className="feedback-slider-three">
    					<div className="item">
    						<div className="feedback-block-six rounded-4">
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
    						<div className="feedback-block-six rounded-4">
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
    							<blockquote>Encontramos la casa de nuestros sueños. Excelente negocio con ellos. Simplificó las tareas y ahorró tiempo. Gracias</blockquote>
    							<div className="d-flex align-items-center justify-content-between">
    								<h6 className="fs-20 m0">Jannat Ferdu, <span className="fw-normal opacity-50">California</span></h6>
    								<img src="/images/media/img_02.jpg" alt="" className="rounded-circle avatar" />
    							</div>
    						</div>

    					</div>
    					<div className="item">
    						<div className="feedback-block-six rounded-4">
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
    			</div>
    		</div>




    		<div className="agent-section-one position-relative z-1 mt-150 xl-mt-120">
    			<div className="container">
    				<div className="position-relative">
    					<div className="title-one mb-85 lg-mb-50 wow fadeInLeft">
    						<h3>Nuestros <span>Agentes<img src="/images/lazy.svg" data-src="/images/shape/title_shape_05.svg" alt="" className="lazy-img" /></span></h3>
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
    										<a href="/agent_details" className="stretched-link">CEO y Fundador</a>
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
    										<a href="/agent_details" className="stretched-link">Minorista</a>
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
    										<a href="/agent_details" className="stretched-link">Experto en Marketing</a>
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
    										<a href="/agent_details" className="stretched-link">Corredora</a>
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
    										<a href="/agent_details" className="stretched-link">Corredor</a>
    									</div>
    								</div>

    							</div>
    						</div>
    					</div>


    					<div className="section-btn text-center md-mt-60">
    						<a href="/agent" className="btn-five">Conoce a Todo el Equipo</a>
    					</div>
    				</div>
    			</div>
    		</div>




    		<div className="partner-section-one mt-150 xl-mt-120 lg-mt-100 mb-130 xl-mb-100 lg-mb-60">
    			<div className="container">
    				<h6 className="text-center fs-20 mb-50 lg-mb-20">Más de 100 empresas confían en nosotros.</h6>
    			</div>
    			<div className="bg-wrapper bg-white">
    				<div className="container">
    					<div className="partner-logo-one">
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