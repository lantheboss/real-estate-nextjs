/* eslint-disable */

import { TemplatePageShell } from "@/components/template-page-shell";

export const metadata = {
  title: "Plantilla y Panel de Control de Home Real Estate para Next.js",
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
    									<a href="#" data-bs-toggle="modal" data-bs-target="#loginModal" className="btn-one"><i className="fa-regular fa-lock"></i> <span>Iniciar sesión</span></a>
                                    </li>
    								<li className="d-none d-md-inline-block ms-3">
                                        <a href="/dashboard/add-property" className="btn-two" target="_blank" rel="noopener noreferrer"><span>Agregar Anuncio</span> <i className="fa-thin fa-arrow-up-right"></i></a>
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
    															<li><a href="/listing_03" className="dropdown-item"><span>Cuadrícula con Filtro Superior-1</span></a></li>
    															<li><a href="/listing_07" className="dropdown-item"><span>Cuadrícula con Filtro Superior-2</span></a></li>
    															<li><a href="/listing_04" className="dropdown-item"><span>Lista con Filtro Superior-1</span></a></li>
    															<li><a href="/listing_08" className="dropdown-item"><span>Lista con Filtro Superior-2</span></a></li>
    															<li><a href="/listing_09" className="dropdown-item"><span>Cuadrícula con Filtro Banner-1</span></a></li>
    														</ul>
    													</div> 
    												</div>
    												<div className="col-lg-4">
    													<div className="menu-column">
    														<h6 className="mega-menu-title">Tipo de Anuncio</h6>
    														<ul className="style-none mega-dropdown-list">
    															<li><a href="/listing_11" className="dropdown-item"><span>Cuadrícula con Filtro Banner-2</span></a></li>
    															<li><a href="/listing_10" className="dropdown-item"><span>Lista con Filtro Banner-1</span></a></li>
    															<li><a href="/listing_12" className="dropdown-item"><span>Lista con Filtro Banner-2</span></a></li>
    															<li><a href="/listing_13" className="dropdown-item"><span>Cuadrícula a Ancho Completo</span></a></li>
    															<li><a href="/listing_14" className="dropdown-item"><span>Cuadrícula a Ancho Completo con Mapa-1</span></a></li>
    															<li><a href="/listing_16" className="dropdown-item"><span>Cuadrícula a Ancho Completo con Mapa-2</span></a></li>
    															<li><a href="/listing_15" className="dropdown-item"><span>Lista a Ancho Completo con Mapa-1</span></a></li>
    															<li><a href="/listing_17" className="dropdown-item"><span>Lista a Ancho Completo con Mapa-2</span></a></li>
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
    											<li><a href="/blog_01" className="dropdown-item"><span>Cuadrícula del Blog</span></a></li>
    											<li><a href="/blog_02" className="dropdown-item"><span>Lista del Blog</span></a></li>
    											<li><a href="/blog_03" className="dropdown-item"><span>Blog 2 columnas</span></a></li>
    											<li><a href="/blog_details" className="dropdown-item"><span>Detalles del Blog</span></a></li>
    										</ul>
    									</li>
    									<li className="d-md-none ps-2 pe-2 mt-20">
    										<a href="/dashboard/add-property" className="btn-two w-100" target="_blank" rel="noopener noreferrer"><span>Agregar Anuncio</span> <i className="fa-thin fa-arrow-up-right"></i></a>
    									</li>
    								</ul>
    							</div>
    						</nav>
    					</div>
    				</div> 
    			</div> 
    		</header> 






    		<div className="property-listing-eight pt-150 xl-pt-120">
    			<div className="search-wrapper-three layout-two position-relative">
    				<div className="bg-wrapper rounded-0 border-0">
    					<form action="#">
    						<div className="row gx-0 align-items-center">
    							<div className="col-xxl-2 col-xl-3 col-sm-6">
    								<div className="input-box-one border-left">
    									<div className="label">Estoy buscando...</div>
    									<select className="nice-select fw-normal">
    										<option value="1">Comprar Apartamentos</option>
    										<option value="2">Comprar Condominios</option>
    										<option value="3">Comprar Casas</option>
    										<option value="4">Comprar Industrial</option>
    										<option value="6">Comprar Villas</option>
    									</select>
    								</div>

    							</div>
    							<div className="col-xl-3 col-sm-6">
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
    							<div className="col-xl-3 col-sm-4">
    								<div className="input-box-one border-left">
    									<div className="label">Rango de Precio</div>
    									<select className="nice-select fw-normal">
    										<option value="1">$10,000 - $200,000</option>
    										<option value="2">$200,000 - $300,000</option>
    										<option value="2">$300,000 - $400,000</option>
    									</select>
    								</div>

    							</div>
    							<div className="col-xl-1 col-sm-4 col-6">
    								<div className="input-box-one border-left">
    									<div className="label">Dormitorios</div>
    									<select className="nice-select fw-normal">
    										<option value="1">Cualquiera</option>
    										<option value="2">1+</option>
    										<option value="2">2+</option>
    									</select>
    								</div>

    							</div>
    							<div className="col-xl-1 col-sm-4 col-6">
    								<div className="input-box-one border-left">
    									<div className="label">Baños</div>
    									<select className="nice-select fw-normal">
    										<option value="1">Cualquiera</option>
    										<option value="2">1+</option>
    										<option value="2">2+</option>
    									</select>
    								</div>

    							</div>
    							<div className="col-xxl-2 col-xl-1">
    								<div className="input-box-one lg-mt-20">
    									<div className="d-flex align-items-center justify-content-center justify-content-xl-end">
    										<a href="#" data-bs-toggle="modal" data-bs-target="#advanceFilterModal" className="search-modal-btn tran3s text-uppercase fw-500 d-inline-flex align-items-center">
    											<span className="me-3 d-xl-none d-xxl-block">BÚSQUEDA AVANZADA</span>
    											<i className="fa-light fa-sliders-up"></i>
    										</a>
    									</div>
    								</div>

    							</div>
    						</div>
    					</form>
    				</div>
    			</div>



                <div className="listing-type-filter border-0">
                    <div className="wrapper">
                        <ul className="style-none d-flex flex-wrap align-items-center justify-content-center justify-content-xxl-between">
                            <li>Seleccionar Tipo:</li>
                            <li><a href="#" className="active">Todos</a></li>
                            <li><a href="#">Apartamentos</a></li>
                            <li><a href="#">Villa</a></li>
                            <li><a href="#">Hipoteca</a></li>
                            <li><a href="#">Loft</a></li>
                            <li><a href="#">Casa</a></li>
                            <li><a href="#">Piso</a></li>
                            <li><a href="#">Edificio</a></li>
                            <li><a href="#">Oficina</a></li>
                            <li><a href="#">Fábrica</a></li>
                            <li><a href="#">Industria</a></li>
                        </ul>
                    </div>

                </div>


                <div className="row gx-0">
                    <div className="col-xxl-6 col-lg-5">
                        <div id="google-map-area" className="h-100">
                            <div className="google-map-home" id="contact-google-map" data-map-lat="40.925372" data-map-lng="-74.276544" data-icon-path="images/home2/map-icon.png" data-map-title="Lugar Increíble" data-map-zoom="12"></div>
                        </div>
                    </div>
    				<div className="col-xxl-6 col-lg-7">
    					<div className="bg-light pl-40 pr-40 pt-35 pb-60">
    						<div className="listing-header-filter d-sm-flex justify-content-between align-items-center mb-40 lg-mb-30">
    							<div>Mostrando <span className="color-dark fw-500">1–4</span> de <span className="color-dark fw-500">1,230</span> resultados</div>
    							<div className="d-flex align-items-center xs-mt-20">
    								<div className="short-filter d-flex align-items-center">
    									<div className="fs-16 me-2">Ordenar por:</div>
    									<select className="nice-select">
    										<option value="0">Más reciente</option>
    										<option value="1">Más vendido</option>
    										<option value="2">Mejor coincidencia</option>
    										<option value="3">Precio menor</option>
    										<option value="4">Precio mayor</option>
    									</select>
    								</div>
    								<a href="/listing_14" className="tran3s layout-change rounded-circle ms-auto ms-sm-3" data-bs-toggle="tooltip" title="Cambiar a Vista de Cuadrícula"><i className="fa-regular fa-grid-2"></i></a>
    							</div>
    						</div>


    						<div className="listing-card-seven border-20 p-20 mb-35 wow fadeInUp">
                                <div className="d-flex flex-wrap layout-one">
                                    <div className="img-gallery position-relative z-1 border-20 overflow-hidden" style={{ backgroundImage: "url(images/listing/img_28.jpg)" }}>
                                        <a href="#" className="fav-btn tran3s"><i className="fa-light fa-heart"></i></a>
                                        <div className="img-slider-btn">
                                            03 <i className="fa-regular fa-image"></i>
                                            <a href="/images/listing/img_large_04.jpg" className="d-block" data-fancybox="img1" data-caption="Apartamentos Marbel"></a>
                                            <a href="/images/listing/img_large_06.jpg" className="d-block" data-fancybox="img1" data-caption="Apartamentos Marbel"></a>
                                            <a href="/images/listing/img_large_03.jpg" className="d-block" data-fancybox="img1" data-caption="Apartamentos Marbel"></a>
                                        </div>
                                    </div>

                                    <div className="property-info">
                                        <div className="tag border-20 fw-500 sale">EN VENTA</div>
                                        <div className="address fs-16 mt-20"><i className="bi bi-geo-alt"></i> 3891 Ranchview, California 62639</div>
                                        <div className="feature2 fs-16 color-dark mt-20 mb-30 pb-5">
                                            <ul className="style-none d-flex flex-wrap align-items-center justify-content-between">
                                                <li className="d-flex align-items-center mt-15">
                                                    <img src="/images/lazy.svg" data-src="/images/icon/icon_04.svg" alt="" className="lazy-img icon me-2" />
                                                    <span className="fs-16">1370 pies²</span>
                                                </li>
                                                <li className="d-flex align-items-center mt-15">
                                                    <img src="/images/lazy.svg" data-src="/images/icon/icon_05.svg" alt="" className="lazy-img icon me-2" />
                                                    <span className="fs-16">03 dorm</span>
                                                </li>
                                                <li className="d-flex align-items-center mt-15">
                                                    <img src="/images/lazy.svg" data-src="/images/icon/icon_06.svg" alt="" className="lazy-img icon me-2" />
                                                    <span className="fs-16">02 baños</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="pl-footer d-flex align-items-center justify-content-between">
                                            <strong className="price fw-500 color-dark sm w-auto m0">$32,800</strong>
                                            <a href="/listing_details_05" className="btn-four rounded-circle"><i className="bi bi-arrow-up-right"></i></a>
                                        </div>
                                    </div>

                                </div>
                            </div>


                            <div className="listing-card-seven border-20 p-20 mb-35 wow fadeInUp">
                                <div className="d-flex flex-wrap layout-one">
                                    <div className="img-gallery position-relative z-1 border-20 overflow-hidden" style={{ backgroundImage: "url(images/listing/img_29.jpg)" }}>
                                        <a href="#" className="fav-btn tran3s"><i className="fa-light fa-heart"></i></a>
                                        <div className="img-slider-btn">
                                            03 <i className="fa-regular fa-image"></i>
                                            <a href="/images/listing/img_large_01.jpg" className="d-block" data-fancybox="img2" data-caption="Villa Duplex Orkit."></a>
                                            <a href="/images/listing/img_large_02.jpg" className="d-block" data-fancybox="img2" data-caption="Villa Duplex Orkit."></a>
                                            <a href="/images/listing/img_large_03.jpg" className="d-block" data-fancybox="img2" data-caption="Villa Duplex Orkit."></a>
                                        </div>
                                    </div>

                                    <div className="property-info">
                                        <div className="tag border-20 fw-500">EN ALQUILER</div>
                                        <div className="address fs-16 mt-20"><i className="bi bi-geo-alt"></i> 3891 Ranchview, California 62639</div>
                                        <div className="feature2 fs-16 color-dark mt-20 mb-30 pb-5">
                                            <ul className="style-none d-flex flex-wrap align-items-center justify-content-between">
                                                <li className="d-flex align-items-center mt-15">
                                                    <img src="/images/lazy.svg" data-src="/images/icon/icon_04.svg" alt="" className="lazy-img icon me-2" />
                                                    <span className="fs-16">1370 pies²</span>
                                                </li>
                                                <li className="d-flex align-items-center mt-15">
                                                    <img src="/images/lazy.svg" data-src="/images/icon/icon_05.svg" alt="" className="lazy-img icon me-2" />
                                                    <span className="fs-16">03 dorm</span>
                                                </li>
                                                <li className="d-flex align-items-center mt-15">
                                                    <img src="/images/lazy.svg" data-src="/images/icon/icon_06.svg" alt="" className="lazy-img icon me-2" />
                                                    <span className="fs-16">02 baños</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="pl-footer d-flex align-items-center justify-content-between">
                                            <strong className="price fw-500 color-dark sm w-auto m0">$2,370/<sub>m</sub></strong>
                                            <a href="/listing_details_05" className="btn-four rounded-circle"><i className="bi bi-arrow-up-right"></i></a>
                                        </div>
                                    </div>

                                </div>
                            </div>


                            <div className="listing-card-seven border-20 p-20 mb-35 wow fadeInUp">
                                <div className="d-flex flex-wrap layout-one">
                                    <div className="img-gallery position-relative z-1 border-20 overflow-hidden" style={{ backgroundImage: "url(images/listing/img_37.jpg)" }}>
                                        <a href="#" className="fav-btn tran3s"><i className="fa-light fa-heart"></i></a>
                                        <div className="img-slider-btn">
                                            03 <i className="fa-regular fa-image"></i>
                                            <a href="/images/listing/img_large_06.jpg" className="d-block" data-fancybox="img3" data-caption="Villa Oepn"></a>
                                            <a href="/images/listing/img_large_05.jpg" className="d-block" data-fancybox="img3" data-caption="Villa Oepn"></a>
                                            <a href="/images/listing/img_large_01.jpg" className="d-block" data-fancybox="img3" data-caption="Villa Oepn"></a>
                                        </div>
                                    </div>

                                    <div className="property-info">
                                        <div className="tag border-20 fw-500 sale">EN VENTA</div>
                                        <div className="address fs-16 mt-20"><i className="bi bi-geo-alt"></i> 3891 Ranchview, California 62639</div>
                                        <div className="feature2 fs-16 color-dark mt-20 mb-30 pb-5">
                                            <ul className="style-none d-flex flex-wrap align-items-center justify-content-between">
                                                <li className="d-flex align-items-center mt-15">
                                                    <img src="/images/lazy.svg" data-src="/images/icon/icon_04.svg" alt="" className="lazy-img icon me-2" />
                                                    <span className="fs-16">1370 pies²</span>
                                                </li>
                                                <li className="d-flex align-items-center mt-15">
                                                    <img src="/images/lazy.svg" data-src="/images/icon/icon_05.svg" alt="" className="lazy-img icon me-2" />
                                                    <span className="fs-16">03 dorm</span>
                                                </li>
                                                <li className="d-flex align-items-center mt-15">
                                                    <img src="/images/lazy.svg" data-src="/images/icon/icon_06.svg" alt="" className="lazy-img icon me-2" />
                                                    <span className="fs-16">02 baños</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="pl-footer d-flex align-items-center justify-content-between">
                                            <strong className="price fw-500 color-dark sm w-auto m0">$24,000</strong>
                                            <a href="/listing_details_05" className="btn-four rounded-circle"><i className="bi bi-arrow-up-right"></i></a>
                                        </div>
                                    </div>

                                </div>
                            </div>

    						<div className="pt-5">
    							<ul className="pagination-two d-inline-flex align-items-center justify-content-center style-none">
    								<li><a href="#"><i className="fa-regular fa-chevron-left"></i></a></li>
    								<li className="active"><a href="#">1</a></li>
    								<li><a href="#">2</a></li>
    								<li><a href="#">3</a></li>
    								<li><span>...</span></li>
    								<li><a href="#">13</a></li>
    								<li><a href="#"><i className="fa-regular fa-chevron-right"></i></a></li>
    							</ul>
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
    									<button className="nav-link active" data-bs-toggle="tab" data-bs-target="#fc1" role="tab">Iniciar sesión</button>
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
    													<input type="email" placeholder="Tuemail@gmail.com" />
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
    												<button className="btn-two w-100 text-uppercase d-block mt-20">Iniciar sesión</button>
    											</div>
    										</div>
    									</form>
    								</div>

    								<div className="tab-pane" role="tabpanel" id="fc2">
    									<div className="text-center mb-20">
    										<h2>Registrarse</h2>
    										<p className="fs-20 color-dark">¿Ya tienes una cuenta? <a href="#">Iniciar sesión</a></p>
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
    													<label>Correo electrónico*</label>
    													<input type="email" placeholder="zubayerhasan@gmail.com" />
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
                                                            <div className="label">Estoy buscando...</div>
                                                            <select className="nice-select fw-normal">
                                                                <option value="1">Comprar Apartamentos</option>
                                                                <option value="2">Alquilar Condominios</option>
                                                                <option value="3">Vender Casas</option>
                                                                <option value="4">Alquilar Industrial</option>
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
                                                            <div className="label">Dormitorios</div>
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
                                                                <label>Aire acondicionado y calefacción</label>
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
                                                                <label>Acceso para discapacitados</label>
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
                                                                <label>Apto para mascotas</label>
                                                            </li>
                                                            <li>
                                                                <input type="checkbox" name="Amenities" value="09" />
                                                                <label>Altura del techo</label>
                                                            </li>
                                                            <li>
                                                                <input type="checkbox" name="Amenities" value="10" />
                                                                <label>Chimenea</label>
                                                            </li>
                                                            <li>
                                                                <input type="checkbox" name="Amenities" value="11" />
                                                                <label>Área de juegos</label>
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
                                                        <h6 className="block-title fw-bold mt-45 mb-20">PIES²</h6>
                                                        <div className="d-flex align-items-center sqf-ranger">
                                                            <input type="text" placeholder="Mín" className="rounded-0" />
                                                            <div className="divider"></div>
                                                            <input type="text" placeholder="Máx" className="rounded-0" />
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <button className="fw-500 text-uppercase tran3s apply-search w-100 rounded-0 mt-40 mb-25">
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