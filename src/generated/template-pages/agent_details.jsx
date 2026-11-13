/* eslint-disable */

import { TemplatePageShell } from "@/components/template-page-shell";

export const metadata = {
  title: "Plantilla Inmobiliaria Home Real Estate Next.js y Panel de Control",
  description: "Home Real Estate es una plantilla moderna de Next.js diseñada para agencias inmobiliarias.",
  keywords: ["Bienes raíces", "Venta de propiedades", "Compra de propiedades"],
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
                                        <a href="/dashboard/add-property" className="btn-ten rounded-0" target="_blank" rel="noopener noreferrer"><span>Añadir Anuncio</span> <i className="bi bi-arrow-up-right"></i></a>
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
    										<a className="nav-link" href="/dashboard/dashboard-index" target="_blank" rel="noopener noreferrer">Panel</a>
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
    							        	<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">Anuncios
    										</a>
    						                <ul className="dropdown-menu">
    							                <li className="row gx-1">
    												<div className="col-lg-4">
    													<div className="menu-column">
    														<h6 className="mega-menu-title">Tipo de Anuncio</h6>
    														<ul className="style-none mega-dropdown-list">
    															<li><a href="/listing_01" className="dropdown-item"><span>Cuadrícula con Barra Lateral-1</span></a></li>
    															<li><a href="/listing_05" className="dropdown-item"><span>Cuadrícula con Barra Lateral-2</span></a></li>
    															<li><a href="/listing_02" className="dropdown-item"><span>Lista con Barra Lateral-1</span></a></li>
    															<li><a href="/listing_06" className="dropdown-item"><span>Lista con Barra Lateral-2</span></a></li>
    															<li><a href="/listing_03" className="dropdown-item"><span>Cuadrícula Filtro Superior-1</span></a></li>
    															<li><a href="/listing_07" className="dropdown-item"><span>Cuadrícula Filtro Superior-2</span></a></li>
    															<li><a href="/listing_04" className="dropdown-item"><span>Lista Filtro Superior-1</span></a></li>
    															<li><a href="/listing_08" className="dropdown-item"><span>Lista Filtro Superior-2</span></a></li>
    															<li><a href="/listing_09" className="dropdown-item"><span>Cuadrícula Filtro Banner-1</span></a></li>
    														</ul>
    													</div> 
    												</div>
    												<div className="col-lg-4">
    													<div className="menu-column">
    														<h6 className="mega-menu-title">Tipo de Anuncio</h6>
    														<ul className="style-none mega-dropdown-list">
    															<li><a href="/listing_11" className="dropdown-item"><span>Cuadrícula Filtro Banner-2</span></a></li>
    															<li><a href="/listing_10" className="dropdown-item"><span>Lista Filtro Banner-1</span></a></li>
    															<li><a href="/listing_12" className="dropdown-item"><span>Lista Filtro Banner-2</span></a></li>
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
    															<li><a href="/listing_details_01" className="dropdown-item"><span>Detalles del Anuncio-1</span></a></li>
    															<li><a href="/listing_details_02" className="dropdown-item"><span>Detalles del Anuncio-2</span></a></li>
    															<li><a href="/listing_details_03" className="dropdown-item"><span>Detalles del Anuncio-3</span></a></li>
    															<li><a href="/listing_details_04" className="dropdown-item"><span>Detalles del Anuncio-4</span></a></li>
    															<li><a href="/listing_details_05" className="dropdown-item"><span>Detalles del Anuncio-5</span></a></li>
    															<li><a href="/listing_details_06" className="dropdown-item"><span>Detalles del Anuncio-6</span></a></li>
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
    															<li><a href="/agency_details" className="dropdown-item"><span>Detalles de la Agencia</span></a></li>
    															<li><a href="/agent" className="dropdown-item"><span>Agente</span></a></li>
    															<li><a href="/agent_details" className="dropdown-item"><span>Detalles del Agente</span></a></li>
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
    															<li><a href="/contact" className="dropdown-item"><span>Contacto</span></a></li>
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
    											<li><a href="/blog_01" className="dropdown-item"><span>Cuadrícula del Blog</span></a></li>
    											<li><a href="/blog_02" className="dropdown-item"><span>Lista del Blog</span></a></li>
    											<li><a href="/blog_03" className="dropdown-item"><span>Blog 2 columnas</span></a></li>
    											<li><a href="/blog_details" className="dropdown-item"><span>Detalles del Blog</span></a></li>
    										</ul>
    									</li>
    									<li className="d-md-none ps-2 pe-2 mt-20">
    										<a href="/dashboard/add-property" className="btn-ten w-100 rounded-0" target="_blank" rel="noopener noreferrer"><span>Añadir Anuncio</span> <i className="bi bi-arrow-up-right"></i></a>
    									</li>
    								</ul>
    							</div>
    						</nav>
    					</div>
    				</div> 
    			</div> 
    		</header> 

    		<div className="inner-banner-two inner-banner z-1 pt-170 xl-pt-150 md-pt-130 pb-140 xl-pb-100 md-pb-80 position-relative" style={{ backgroundImage: "url(images/media/img_49.jpg)" }}>
    			<div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h3 className="mb-45 xl-mb-30 md-mb-20">Detalles del Agente</h3>
                            <ul className="theme-breadcrumb style-none d-inline-flex align-items-center justify-content-center position-relative z-1 bottom-line">
                                <li><a href="/">Inicio</a></li>
                                <li>/</li>
                                <li><a href="/agent">Agente</a></li>
                                <li>/</li>
                                <li>Mathews Firlo</li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <p className="sub-heading">¡Más de 745,000 anuncios, apartamentos, lotes y terrenos disponibles ahora!</p>
                        </div>
                    </div>
    			</div>
    		</div>

    		<div className="agent-details theme-details-one mt-130 xl-mt-100 pb-150 xl-pb-100">
    			<div className="container">
    				<div className="row">
    					<div className="col-lg-8">
                            <div className="info-pack-one mb-80 xl-mb-50">
                                <div className="row">
                                    <div className="col-xl-6 d-flex">
                                        <div className="media position-relative z-1 w-100 me-xl-4" style={{ backgroundImage: "url(images/agent/img_10.jpg)" }}>
                                            <div className="tag bg-white position-absolute text-uppercase">4 Anuncios</div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="ps-xxl-3 pe-xxl-3 pe-xl-0 ps-xl-0 pe-3 ps-3 pt-40 lg-pt-30 pb-45 lg-pb-30">
                                            <h4>Mathews Firlo.</h4>
                                            <div className="designation fs-16">Ventas y Correduría</div>
                                            <div className="table-responsive">
                                                <table className="table">
                                                    <tbody>
                                                        <tr>
                                                            <td>Ubicación: </td>
                                                            <td>España, Barcelona </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Teléfono: </td>
                                                            <td>+21 456 987 330</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Email:</td>
                                                            <td>mathfir@support.com</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Cualificación:</td>
                                                            <td>Título de Máster</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <ul className="style-none d-flex align-items-center social-icon">
                                                <li><a href="#"><i className="fa-brands fa-whatsapp"></i></a></li>
                                                <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                                                <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                                                <li><a href="#"><i className="fa-brands fa-viber"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

    						<div className="agent-overview bottom-line-dark pb-40 mb-80 xl-mb-50">
    							<h4 className="mb-20">Descripción General</h4>
    							<p className="fs-20 lh-lg pb-15">Antes de fundar Beratung en 2001, Mathew fundó empresas de internet en Silicon Valley y luego ocupó puestos de gestión en Salomon en Nueva York.</p>
                                <p className="fs-20 lh-lg">La gestión de riesgos y el cumplimiento normativo, cuando se abordan estratégicamente, tienen el potencial de ir más allá de mitigar amenazas y proteger las operaciones y la reputación de una empresa. En realidad, pueden generar valor y crear oportunidades. </p>
    						</div>

    						<div className="agent-property-listing bottom-line-dark pb-20 mb-80 xl-mb-50">
    							<div className="d-sm-flex justify-content-between align-items-center mb-40 xs-mb-20">
                                    <h4 className="mb-10">Anuncios</h4>
                                    <div className="filter-nav-one xs-mt-40">
                                        <ul className="style-none d-flex justify-content-center flex-wrap isotop-menu-wrapper">
                                            <li className="is-checked" data-filter="*">Todos</li>
                                            <li data-filter=".sell">Vender</li>
                                            <li data-filter=".rent">Alquilar</li>
                                        </ul>
                                    </div>
                                </div>
                                <div id="isotop-gallery-wrapper" className="grid-2column">
                                    <div className="grid-sizer"></div>
                                    <div className="isotop-item rent">
                                        <div className="listing-card-one shadow-none style-two mb-50">
    										<div className="img-gallery">
    											<div className="position-relative overflow-hidden">
    												<div className="tag bg-white text-dark fw-500">EN ALQUILER</div>
    												<img src="/images/listing/img_69.jpg" className="w-100" alt="..." />

    												<div className="img-slider-btn">
    													03 <i className="fa-regular fa-image"></i>
    													<a href="/images/listing/img_large_01.jpg" className="d-block" data-fancybox="img1" data-caption="Blueberry villa"></a>
    													<a href="/images/listing/img_large_02.jpg" className="d-block" data-fancybox="img1" data-caption="Blueberry villa"></a>
    													<a href="/images/listing/img_large_03.jpg" className="d-block" data-fancybox="img1" data-caption="Blueberry villa"></a>
    												</div>
    											</div>
    										</div>

    										<div className="property-info d-flex justify-content-between align-items-end pt-30">
    											<div>
    												<strong className="price fw-500 color-dark">$2,210/ <sub>m</sub></strong>
    												<div className="address pt-5 m0">6391 Elgin St. Celina</div>
    											</div>
    											<a href="#" className="btn-four mb-5"><i className="bi bi-arrow-up-right"></i></a>
    										</div>

    									</div>

                                    </div>
                                    <div className="isotop-item sell">
                                        <div className="listing-card-one shadow-none style-two mb-50">
    										<div className="img-gallery">
    											<div className="position-relative overflow-hidden">
    												<div className="tag bg-white text-dark fw-500">EN ALQUILER</div>
    												<img src="/images/listing/img_70.jpg" className="w-100" alt="..." />

    												<div className="img-slider-btn">
    													03 <i className="fa-regular fa-image"></i>
    													<a href="/images/listing/img_large_01.jpg" className="d-block" data-fancybox="img2" data-caption="Blueberry villa"></a>
    													<a href="/images/listing/img_large_02.jpg" className="d-block" data-fancybox="img2" data-caption="Blueberry villa"></a>
    													<a href="/images/listing/img_large_03.jpg" className="d-block" data-fancybox="img2" data-caption="Blueberry villa"></a>
    												</div>
    											</div>
    										</div>

    										<div className="property-info d-flex justify-content-between align-items-end pt-30">
    											<div>
    												<strong className="price fw-500 color-dark">$2,210/ <sub>m</sub></strong>
    												<div className="address pt-5 m0">6391 Elgin St. Celina</div>
    											</div>
    											<a href="#" className="btn-four mb-5"><i className="bi bi-arrow-up-right"></i></a>
    										</div>

    									</div>

                                    </div>
                                    <div className="isotop-item sell">
                                        <div className="listing-card-one shadow-none style-two mb-50">
    										<div className="img-gallery">
    											<div className="position-relative overflow-hidden">
    												<div className="tag bg-white text-dark fw-500">EN VENTA</div>
    												<img src="/images/listing/img_71.jpg" className="w-100" alt="..." />

    												<div className="img-slider-btn">
    													03 <i className="fa-regular fa-image"></i>
    													<a href="/images/listing/img_large_01.jpg" className="d-block" data-fancybox="img3" data-caption="Blueberry villa"></a>
    													<a href="/images/listing/img_large_02.jpg" className="d-block" data-fancybox="img3" data-caption="Blueberry villa"></a>
    													<a href="/images/listing/img_large_03.jpg" className="d-block" data-fancybox="img3" data-caption="Blueberry villa"></a>
    												</div>
    											</div>
    										</div>

    										<div className="property-info d-flex justify-content-between align-items-end pt-30">
    											<div>
    												<strong className="price fw-500 color-dark">$1,23,710</strong>
    												<div className="address pt-5 m0">6391 Elgin St. Celina</div>
    											</div>
    											<a href="#" className="btn-four mb-5"><i className="bi bi-arrow-up-right"></i></a>
    										</div>

    									</div>

                                    </div>
                                    <div className="isotop-item rent">
                                        <div className="listing-card-one shadow-none style-two mb-50">
    										<div className="img-gallery">
    											<div className="position-relative overflow-hidden">
    												<div className="tag bg-white text-dark fw-500">EN VENTA</div>
    												<img src="/images/listing/img_72.jpg" className="w-100" alt="..." />

    												<div className="img-slider-btn">
    													03 <i className="fa-regular fa-image"></i>
    													<a href="/images/listing/img_large_01.jpg" className="d-block" data-fancybox="img4" data-caption="Blueberry villa"></a>
    													<a href="/images/listing/img_large_02.jpg" className="d-block" data-fancybox="img4" data-caption="Blueberry villa"></a>
    													<a href="/images/listing/img_large_03.jpg" className="d-block" data-fancybox="img4" data-caption="Blueberry villa"></a>
    												</div>
    											</div>
    										</div>

    										<div className="property-info d-flex justify-content-between align-items-end pt-30">
    											<div>
    												<strong className="price fw-500 color-dark">$78,420</strong>
    												<div className="address pt-5 m0">6391 Elgin St. Celina</div>
    											</div>
    											<a href="#" className="btn-four mb-5"><i className="bi bi-arrow-up-right"></i></a>
    										</div>

    									</div>

                                    </div>
                                </div>
    						</div>

    						<div className="review-panel-one bottom-line-dark pb-40 mb-80 xl-mb-50">
    							<div className="position-relative z-1">
    								<div className="d-sm-flex justify-content-between align-items-center mb-10">
    									<h4 className="m0 xs-pb-30">Todas las Reseñas (Calificación 4.7)</h4>
    									<select className="nice-select rounded-0">
    										<option value="0">Más recientes</option>
    										<option value="1">Más vendidos</option>
    										<option value="2">Mejor coincidencia</option>
    									</select>
    								</div>
    								<div className="review-wrapper mb-35">
    									<div className="review">
    										<img src="/images/media/img_01.jpg" alt="" className="rounded-circle avatar" />
    										<div className="text">
    											<div className="d-sm-flex justify-content-between">
    												<div>
    													<h6 className="name">Zubayer Al Hasan</h6>
    													<div className="time fs-16">17 Ago, 23</div>
    												</div>
    												<ul className="rating style-none d-flex xs-mt-10">
    													<li><span className="fst-italic me-2">(Calificación 4.7)</span> </li>
    													<li><i className="fa-sharp fa-solid fa-star"></i></li>
    													<li><i className="fa-sharp fa-solid fa-star"></i></li>
    													<li><i className="fa-sharp fa-solid fa-star"></i></li>
    													<li><i className="fa-sharp fa-solid fa-star"></i></li>
    													<li><i className="fa-sharp fa-solid fa-star"></i></li>
    												</ul>
    											</div>
    											<p className="fs-20 mt-20 mb-30">Lorem ipsum dolor sit amet consectetur. Pellentesque sed nulla facili diam posuere aliquam suscipit quam.</p>
    											<div className="d-flex review-help-btn">
    												<a href="#" className="me-5"><i className="fa-sharp fa-regular fa-thumbs-up"></i> <span>Útil</span></a>
    												<a href="#"><i className="fa-sharp fa-regular fa-flag-swallowtail"></i> <span>Reportar</span></a>
    											</div>
    										</div>

    									</div>

    									<div className="review">
    										<img src="/images/media/img_03.jpg" alt="" className="rounded-circle avatar" />
    										<div className="text">
    											<div className="d-sm-flex justify-content-between">
    												<div>
    													<h6 className="name">Rashed Kabir</h6>
    													<div className="time fs-16">13 Jun, 23</div>
    												</div>
    												<ul className="rating style-none d-flex xs-mt-10">
    													<li><span className="fst-italic me-2">(Calificación 4.9)</span> </li>
    													<li><i className="fa-sharp fa-solid fa-star"></i></li>
    													<li><i className="fa-sharp fa-solid fa-star"></i></li>
    													<li><i className="fa-sharp fa-solid fa-star"></i></li>
    													<li><i className="fa-sharp fa-solid fa-star"></i></li>
    													<li><i className="fa-sharp fa-solid fa-star"></i></li>
    												</ul>
    											</div>
    											<p className="fs-20 mt-20 mb-30">Lorem ipsum dolor sit amet consectetur. Pellentesque sed nulla facili diam posuere aliquam suscipit quam.</p>
    											<ul className="style-none d-flex flex-wrap review-gallery pb-30">
    												<li><a href="/images/listing/img_large_01.jpg" className="d-block" data-fancybox="revImg" data-caption="Duplex orkit villa"><img src="/images/listing/img_48.jpg" alt="" /></a></li>
    												<li><a href="/images/listing/img_large_02.jpg" className="d-block" data-fancybox="revImg" data-caption="Duplex orkit villa"><img src="/images/listing/img_49.jpg" alt="" /></a></li>
    												<li><a href="/images/listing/img_large_03.jpg" className="d-block" data-fancybox="revImg" data-caption="Duplex orkit villa"><img src="/images/listing/img_50.jpg" alt="" /></a></li>
    												<li>
    													<div className="position-relative more-img">
    														<img src="/images/listing/img_50.jpg" alt="" />
    														<span>13+</span>
    														<a href="/images/listing/img_large_04.jpg" className="d-block" data-fancybox="revImg" data-caption="Duplex orkit villa."></a>
    														<a href="/images/listing/img_large_05.jpg" className="d-block" data-fancybox="revImg" data-caption="Duplex orkit villa."></a>
    														<a href="/images/listing/img_large_06.jpg" className="d-block" data-fancybox="revImg" data-caption="Duplex orkit villa."></a>
    													</div>
    												</li>
    											</ul>
    											<div className="d-flex review-help-btn">
    												<a href="#" className="me-5"><i className="fa-sharp fa-regular fa-thumbs-up"></i> <span>Útil</span></a>
    												<a href="#"><i className="fa-sharp fa-regular fa-flag-swallowtail"></i> <span>Reportar</span></a>
    											</div>

    										</div>

    									</div>

    									<div className="review hide">
    										<img src="/images/media/img_02.jpg" alt="" className="rounded-circle avatar" />
    										<div className="text">
    											<div className="d-sm-flex justify-content-between">
    												<div>
    													<h6 className="name">Perty Jinta</h6>
    													<div className="time fs-16">17 Ago, 23</div>
    												</div>
    												<ul className="rating style-none d-flex xs-mt-10">
    													<li><span className="fst-italic me-2">(Calificación 4.7)</span> </li>
    													<li><i className="fa-sharp fa-solid fa-star"></i></li>
    													<li><i className="fa-sharp fa-solid fa-star"></i></li>
    													<li><i className="fa-sharp fa-solid fa-star"></i></li>
    													<li><i className="fa-sharp fa-solid fa-star"></i></li>
    													<li><i className="fa-sharp fa-solid fa-star"></i></li>
    												</ul>
    											</div>
    											<p className="fs-20 mt-20 mb-30">Lorem ipsum dolor sit amet consectetur. Pellentesque sed nulla facili diam posuere aliquam suscipit quam.</p>
    											<div className="d-flex review-help-btn">
    												<a href="#" className="me-5"><i className="fa-sharp fa-regular fa-thumbs-up"></i> <span>Útil</span></a>
    												<a href="#"><i className="fa-sharp fa-regular fa-flag-swallowtail"></i> <span>Reportar</span></a>
    											</div>
    										</div>

    									</div>

    								</div>

    								<div className="load-more-review text-uppercase fw-500 w-100 inverse rounded-0 tran3s">VER LAS 120 RESEÑAS <i className="bi bi-arrow-up-right"></i></div>
    							</div>						
    						</div>

    						<div className="review-form">
    							<h4 className="mb-20">Deja una Respuesta</h4>
    							<p className="fs-20 lh-lg pb-15"><a href="#" data-bs-toggle="modal" data-bs-target="#loginModal" className="color-dark fw-500 text-decoration-underline">Inicia sesión</a> para publicar tu comentario o regístrate si no tienes una cuenta.</p>

    							<div className="bg-dot p-30">
    								<form action="#" className="bg-white p-40">
    									<div className="row">
    										<div className="col-12">
    											<div className="input-box-two mb-30">
    												<div className="label">Título*</div>
    												<input type="text" placeholder="Rashed Kabir" className="type-input rounded-0" />
    											</div>

    										</div>
    										<div className="col-lg-6">
    											<div className="input-box-two mb-30">
    												<div className="label">Email*</div>
    												<input type="email" placeholder="rshdkabir@gmail.com" className="type-input rounded-0" />
    											</div>

    										</div>
    										<div className="col-lg-6">
    											<div className="input-box-two mb-30">
    												<div className="label">Calificaciones*</div>
    												<select className="nice-select rounded-0">
    													<option value="0">Calificaciones</option>
    													<option value="1">Cinco Estrellas</option>
    													<option value="1">Cuatro Estrellas</option>
    													<option value="1">Tres Estrellas</option>
    													<option value="1">Dos Estrellas</option>
    													<option value="1">Una Estrella</option>
    												</select>
    											</div>

    										</div>
    										<div className="col-12">
    											<div className="input-box-two mb-30">
    												<textarea placeholder="Escribe tu reseña aquí..." className="rounded-0"></textarea>
    											</div>

    										</div>
    									</div>
    									<button className="btn-five text-uppercase rounded-0 sm">Publicar Reseña</button>
    								</form>
    							</div>
    						</div>

    					</div>
    					<div className="col-lg-4">
    						<div className="theme-sidebar-one dot-bg p-30 ms-xxl-3 md-mt-60">
    							<div className="tour-schedule bg-white p-30 mb-40">
    								<h5 className="mb-40">Formulario de Contacto</h5>
    								<form action="#">
    									<div className="input-box-three mb-25">
    										<div className="label">Tu Email*</div>
    										<input type="email" placeholder="Ingresa tu correo" className="type-input rounded-0" />
    									</div>

    									<div className="input-box-three mb-25">
    										<div className="label">Tu Teléfono*</div>
    										<input type="tel" placeholder="Tu número de teléfono" className="type-input rounded-0" />
    									</div>

    									<div className="input-box-three mb-15">
    										<div className="label">Mensaje*</div>
    										<textarea placeholder="Hola, estoy interesado en [Califronia Apartments]" className="rounded-0"></textarea>
    									</div>

    									<button className="btn-nine text-uppercase w-100 mb-20">CONSULTA</button>
    								</form>
                                    <a href="tel:+548842445" className="btn-eight sm text-uppercase w-100 rounded-0 tran3s">LLAMAR AHORA</a>
    							</div>

    							<div className="agent-finder bg-white p-30 mb-40">
    								<h5 className="mb-40">Buscar Agente</h5>
    								<form action="#">
    									<div className="input-box-one mb-25">
                                            <div className="label">Nombre del Agente</div>
                                            <input type="text" placeholder="Escribe el Nombre del Agente" className="type-input" />
                                        </div>

    									<div className="input-box-one mb-25">
                                            <div className="label">Palabra clave</div>
                                            <input type="text" placeholder="Apartamentos, Villa" className="type-input" />
                                        </div>

    									<div className="input-box-one mb-25">
                                            <div className="label">Ubicación</div>
                                            <select className="nice-select fw-normal">
                                                <option value="1">Dhanmondi, Dhaka</option>
                                                <option value="2">Acapulco, México</option>
                                                <option value="3">Berlín, Alemania</option>
                                                <option value="4">Cannes, Francia</option>
                                                <option value="5">Delhi, India</option>
                                                <option value="6">Giza, Egipto </option>
                                                <option value="7">La Habana, Cuba</option>
                                            </select>
                                        </div>

    									<button className="btn-nine text-uppercase w-100 mb-10">BUSCAR</button>
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
    							<h3 className="text-white m0">Comienza tu <span>Viaje<img src="/images/lazy.svg" data-src="/images/shape/title_shape_06.svg" alt="" className="lazy-img" /></span> Como Minorista.</h3>
    						</div>

    					</div>
    					<div className="col-lg-6">
    						<div className="form-wrapper me-auto ms-auto me-lg-0">
    							<form action="#">
    								<input type="email" placeholder="Dirección de correo electrónico" className="rounded-0" />
    								<button className="rounded-0">Comenzar</button>
    							</form>
    							<div className="fs-16 mt-10 text-white">¿Ya eres Agente? <a href="#" data-bs-toggle="modal" data-bs-target="#loginModal">Inicia sesión.</a></div>
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
    								<a href="#" className="email tran3s mb-60 md-mb-30">hello@homerealestate.com</a>
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
    									<li><a href="/blog_02">Explorar Carreras</a></li>
    									<li><a href="/pricing_02">Precios</a></li>
    									<li><a href="/dashboard/dashboard-index" target="_blank" rel="noopener noreferrer">Panel</a></li>
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
    									<li><a href="/faq">Preguntas Frecuentes</a></li>
    								</ul>
    							</div>
    						</div>
    						<div className="col-lg-2 col-sm-4 mb-30">
    							<div className="footer-nav">
    								<h5 className="footer-title">Nuevos Anuncios</h5>
    								<ul className="footer-nav-link style-none">
    									<li><a href="/listing_01">​Comprar Apartamentos</a></li>
    									<li><a href="/listing_02">Comprar Condominios</a></li>
    									<li><a href="/listing_03">Alquilar Casas</a></li>
    									<li><a href="/listing_04">Alquilar Industrial</a></li>
    									<li><a href="/listing_05">Comprar Villas</a></li>
    									<li><a href="/listing_06">Alquilar Oficina</a></li>
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
    										<h2>¡Bienvenido de Nuevo!</h2>
    										<p className="fs-20 color-dark">¿Aún no tienes una cuenta? <a href="#">Regístrate</a></p>
    									</div>
    									<form action="#">
    										<div className="row">
    											<div className="col-12">
    												<div className="input-group-meta position-relative mb-25">
    													<label>Email*</label>
    													<input type="email" placeholder="Tuemail@gmail.com" />
    												</div>
    											</div>
    											<div className="col-12">
    												<div className="input-group-meta position-relative mb-20">
    													<label>Contraseña*</label>
    													<input type="password" placeholder="Ingresa la Contraseña" className="pass_log_id" />
    													<span className="placeholder_icon"><span className="passVicon"><img src="/images/icon/icon_68.svg" alt="" /></span></span>
    												</div>
    											</div>
    											<div className="col-12">
    												<div className="agreement-checkbox d-flex justify-content-between align-items-center">
    													<div>
    														<input type="checkbox" id="remember" />
    														<label htmlFor="remember">Mantenerme conectado</label>
    													</div>
    													<a href="#">¿Olvidaste la Contraseña?</a>
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
    										<h2>Registrarse</h2>
    										<p className="fs-20 color-dark">¿Ya tienes una cuenta? <a href="#">Iniciar Sesión</a></p>
    									</div>
    									<form action="#">
    										<div className="row">
    											<div className="col-12">
    												<div className="input-group-meta position-relative mb-25">
    													<label>Nombre*</label>
    													<input type="text" placeholder="Zubayer Hasan" />
    												</div>
    											</div>
    											<div className="col-12">
    												<div className="input-group-meta position-relative mb-25">
    													<label>Email*</label>
    													<input type="email" placeholder="zubayerhasan@gmail.com" />
    												</div>
    											</div>
    											<div className="col-12">
    												<div className="input-group-meta position-relative mb-20">
    													<label>Contraseña*</label>
    													<input type="password" placeholder="Ingresa la Contraseña" className="pass_log_id" />
    													<span className="placeholder_icon"><span className="passVicon"><img src="/images/icon/icon_68.svg" alt="" /></span></span>
    												</div>
    											</div>
    											<div className="col-12">
    												<div className="agreement-checkbox d-flex justify-content-between align-items-center">
    													<div>
    														<input type="checkbox" id="remember2" />
    														<label htmlFor="remember2">Al hacer clic en el botón "Registrarse", aceptas los <a href="#">Términos y condiciones</a> y la <a href="#">Política de privacidad</a></label>
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