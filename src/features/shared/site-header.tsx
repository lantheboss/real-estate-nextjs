/* eslint-disable */

export function SiteHeader() {
  return (
    <header className="theme-main-menu menu-overlay menu-style-one sticky-menu">
        			<div className="alert-wrapper text-center">
        				<p className="fs-16 m0 text-white">La <a href="/listing_01" className="fw-500">venta flash</a> continúa. La oferta termina el — <span>Este Domingo</span></p>
        			</div>

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
  );
}