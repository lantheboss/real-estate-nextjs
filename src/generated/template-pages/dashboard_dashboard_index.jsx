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
  "/vendor/chart.js",
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


    		<aside className="dash-aside-navbar">
    			<div className="position-relative">
    				<div className="logo d-md-block d-flex align-items-center justify-content-between plr bottom-line pb-30">
    					<a href="/dashboard/dashboard-index">
    						<img src="/images/logo/logo.svg" alt="" />
    					</a>
    					<button className="close-btn d-block d-md-none"><i className="fa-light fa-circle-xmark"></i></button>
    				</div>
    				<nav className="dasboard-main-nav pt-30 pb-30 bottom-line">
    					<ul className="style-none">
    						<li className="plr"><a href="#" className="d-flex w-100 align-items-center active">
    							<img src="/dashboard/images/icon/icon_1_active.svg" alt="" />
    							<span>Panel de Control</span>
    						</a></li>
    						<li className="plr"><a href="/dashboard/message" className="d-flex w-100 align-items-center">
    							<img src="/dashboard/images/icon/icon_2.svg" alt="" />
    							<span>Mensajes</span>
    						</a></li>
    						<li className="bottom-line pt-30 lg-pt-20 mb-40 lg-mb-30"></li>
    						<li><div className="nav-title">Perfil</div></li>
    						<li className="plr"><a href="/dashboard/profile" className="d-flex w-100 align-items-center">
    							<img src="/dashboard/images/icon/icon_3.svg" alt="" />
    							<span>Perfil</span>
    						</a></li>
    						<li className="plr"><a href="/dashboard/account-settings" className="d-flex w-100 align-items-center">
    							<img src="/dashboard/images/icon/icon_4.svg" alt="" />
    							<span>Configuración de Cuenta</span>
    						</a></li>
    						<li className="plr"><a href="/dashboard/membership" className="d-flex w-100 align-items-center">
    							<img src="/dashboard/images/icon/icon_5.svg" alt="" />
    							<span>Membresía</span>
    						</a></li>
    						<li className="bottom-line pt-30 lg-pt-20 mb-40 lg-mb-30"></li>
    						<li><div className="nav-title">Propiedades</div></li>
    						<li className="plr"><a href="/dashboard/properties-list" className="d-flex w-100 align-items-center">
    							<img src="/dashboard/images/icon/icon_6.svg" alt="" />
    							<span>Mis Propiedades</span>
    						</a></li>
    						<li className="plr"><a href="/dashboard/add-property" className="d-flex w-100 align-items-center">
    							<img src="/dashboard/images/icon/icon_7.svg" alt="" />
    							<span>Añadir Propiedad</span>
    						</a></li>
    						<li className="plr"><a href="/dashboard/favourites" className="d-flex w-100 align-items-center">
    							<img src="/dashboard/images/icon/icon_8.svg" alt="" />
    							<span>Favoritos</span>
    						</a></li>
    						<li className="plr"><a href="/dashboard/saved-search" className="d-flex w-100 align-items-center">
    							<img src="/dashboard/images/icon/icon_9.svg" alt="" />
    							<span>Búsquedas Guardadas</span>
    						</a></li>
    						<li className="plr"><a href="/dashboard/review" className="d-flex w-100 align-items-center">
    							<img src="/dashboard/images/icon/icon_10.svg" alt="" />
    							<span>Reseñas</span>
    						</a></li>
    					</ul>
    				</nav>

    				<div className="profile-complete-status bottom-line pb-35 plr">
    					<div className="progress-value fw-500">82%</div>
    					<div className="progress-line position-relative">
    						<div className="inner-line" style={{ width: "80%" }}></div>
    					</div>
    					<p>Perfil Completado</p>
    				</div>


    				<div className="plr">
    					<a href="#" className="d-flex w-100 align-items-center logout-btn">
    						<div className="icon tran3s d-flex align-items-center justify-content-center rounded-circle"><img src="/dashboard/images/icon/icon_41.svg" alt="" /></div>
    						<span>Cerrar Sesión</span>
    					</a>
    				</div>
    			</div>
    		</aside>



    		<div className="dashboard-body">
    			<div className="position-relative">

    				<header className="dashboard-header">
    					<div className="d-flex align-items-center justify-content-end">
    						<h4 className="m0 d-none d-lg-block">Panel de Control</h4>
    						<button className="dash-mobile-nav-toggler d-block d-md-none me-auto">
    							<span></span>
    						</button>
    						<form action="#" className="search-form ms-auto">
    							<input type="text" placeholder="Buscar aquí..." />
    							<button><img src="/images/lazy.svg" data-src="/dashboard/images/icon/icon_43.svg" alt="" className="lazy-img m-auto" /></button>
    						</form>
    						<div className="profile-notification position-relative dropdown-center ms-3 ms-md-5 me-4">
    							<button className="noti-btn dropdown-toggle" type="button" id="notification-dropdown" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
    								<img src="/images/lazy.svg" data-src="/dashboard/images/icon/icon_11.svg" alt="" className="lazy-img" />
    								<div className="badge-pill"></div>
    							</button>
    							<ul className="dropdown-menu" aria-labelledby="notification-dropdown">
    								<li>
    									<h4>Notificaciones</h4>
    									<ul className="style-none notify-list">
    										<li className="d-flex align-items-center unread">
    											<img src="/images/lazy.svg" data-src="/dashboard/images/icon/icon_36.svg" alt="" className="lazy-img icon" />
    											<div className="flex-fill ps-2">
    												<h6>Tienes 3 correos nuevos</h6>
    												<span className="time">Hace 3 horas</span>
    											</div>
    										</li>
    										<li className="d-flex align-items-center">
    											<img src="/images/lazy.svg" data-src="/dashboard/images/icon/icon_37.svg" alt="" className="lazy-img icon" />
    											<div className="flex-fill ps-2">
    												<h6>Tu publicación ha sido aprobada</h6>
    												<span className="time">Hace 1 día</span>
    											</div>
    										</li>
    										<li className="d-flex align-items-center unread">
    											<img src="/images/lazy.svg" data-src="/dashboard/images/icon/icon_38.svg" alt="" className="lazy-img icon" />
    											<div className="flex-fill ps-2">
    												<h6>Tu reunión ha sido cancelada</h6>
    												<span className="time">Hace 3 días</span>
    											</div>
    										</li>
    									</ul>
    								</li>
    							</ul>
    						</div>
    						<div className="d-none d-md-block me-3">
    							<a href="/dashboard/add-property" className="btn-two"><span>Añadir Propiedad</span> <i className="fa-thin fa-arrow-up-right"></i></a>
    						</div>
    						<div className="user-data position-relative">
    							<button className="user-avatar online position-relative rounded-circle dropdown-toggle" type="button" id="profile-dropdown" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
    								<img src="/images/lazy.svg" data-src="/dashboard/images/avatar_01.jpg" alt="" className="lazy-img" />
    							</button>

    							<div className="user-name-data">
    								<ul className="dropdown-menu" aria-labelledby="profile-dropdown">
    									<li>
    										<a className="dropdown-item d-flex align-items-center" href="/dashboard/profile"><img src="/images/lazy.svg" data-src="/dashboard/images/icon/icon_23.svg" alt="" className="lazy-img" /><span className="ms-2 ps-1">Perfil</span></a>
    									</li>
    									<li>
    										<a className="dropdown-item d-flex align-items-center" href="/dashboard/account-settings"><img src="/images/lazy.svg" data-src="/dashboard/images/icon/icon_24.svg" alt="" className="lazy-img" /><span className="ms-2 ps-1">Configuración de Cuenta</span></a>
    									</li>
    									<li>
    										<a className="dropdown-item d-flex align-items-center" href="#" data-bs-toggle="modal" data-bs-target="#deleteModal"><img src="/images/lazy.svg" data-src="/dashboard/images/icon/icon_25.svg" alt="" className="lazy-img" /><span className="ms-2 ps-1">Eliminar Cuenta</span></a>
    									</li>
    								</ul>
    							</div>
    						</div>

    					</div>
    				</header>


    				<h2 className="main-title d-block d-lg-none">Panel de Control</h2>
    				<div className="bg-white border-20">
    					<div className="row">
    						<div className="col-lg-3 col-6">
    							<div className="dash-card-one bg-white border-30 position-relative mb-15 skew-none">
    								<div className="d-sm-flex align-items-center justify-content-between">
    									<div className="icon rounded-circle d-flex align-items-center justify-content-center order-sm-1"><img src="/images/lazy.svg" data-src="/dashboard/images/icon/icon_12.svg" alt="" className="lazy-img" /></div>
    									<div className="order-sm-0">
    										<span>Todas las Propiedades</span>
    										<div className="value fw-500">1.7k+</div>
    									</div>
    								</div>
    							</div>

    						</div>
    						<div className="col-lg-3 col-6">
    							<div className="dash-card-one bg-white border-30 position-relative mb-15">
    								<div className="d-sm-flex align-items-center justify-content-between">
    									<div className="icon rounded-circle d-flex align-items-center justify-content-center order-sm-1"><img src="/images/lazy.svg" data-src="/dashboard/images/icon/icon_13.svg" alt="" className="lazy-img" /></div>
    									<div className="order-sm-0">
    										<span>Total Pendientes</span>
    										<div className="value fw-500">03</div>
    									</div>
    								</div>
    							</div>

    						</div>
    						<div className="col-lg-3 col-6">
    							<div className="dash-card-one bg-white border-30 position-relative mb-15">
    								<div className="d-sm-flex align-items-center justify-content-between">
    									<div className="icon rounded-circle d-flex align-items-center justify-content-center order-sm-1"><img src="/images/lazy.svg" data-src="/dashboard/images/icon/icon_14.svg" alt="" className="lazy-img" /></div>
    									<div className="order-sm-0">
    										<span>Vistas Totales</span>
    										<div className="value fw-500">4.8k</div>
    									</div>
    								</div>
    							</div>

    						</div>
    						<div className="col-lg-3 col-6">
    							<div className="dash-card-one bg-white border-30 position-relative mb-15">
    								<div className="d-sm-flex align-items-center justify-content-between">
    									<div className="icon rounded-circle d-flex align-items-center justify-content-center order-sm-1"><img src="/images/lazy.svg" data-src="/dashboard/images/icon/icon_15.svg" alt="" className="lazy-img" /></div>
    									<div className="order-sm-0">
    										<span>Favoritos Totales</span>
    										<div className="value fw-500">07</div>
    									</div>
    								</div>
    							</div>

    						</div>
    					</div>
    				</div>

    				<div className="row gx-xxl-5 d-flex pt-15 lg-pt-10">
    					<div className="col-xl-7 col-lg-6 d-flex flex-column">
    						<div className="user-activity-chart bg-white border-20 mt-30 h-100">
    							<div className="d-flex align-items-center justify-content-between plr">
    								<h5 className="dash-title-two">Vistas de Propiedad</h5>
    								<div className="short-filter d-flex align-items-center">
    									<div className="fs-16 me-2">Ordenar por:</div>
    									<select className="nice-select fw-normal">
    										<option value="0">Semanal</option>
    										<option value="1">Diario</option>
    										<option value="2">Mensual</option>
    									</select>
    								</div>
    							</div>
    							<div className="plr mt-50">
    								<div className="chart-wrapper">
    									<canvas id="property-chart"></canvas>
    								</div>
    							</div>
    						</div>
    					</div>
    					<div className="col-xl-5 col-lg-6 d-flex">
    						<div className="recent-job-tab bg-white border-20 mt-30 plr w-100">
    							<h5 className="dash-title-two">Mensajes Recientes</h5>
    							<div className="message-wrapper">
    								<div className="message-sidebar border-0">
    									<div className="email-read-panel">
    										<div className="email-list-item read border-0 pt-0">
    											<div className="email-short-preview position-relative">
    												<div className="d-flex align-items-center justify-content-between">
    													<div className="sender-name">Jenny Rio.</div>
    													<div className="date">22 Ago</div>
    												</div>
    												<div className="mail-sub">Consulta de trabajo de google.</div>
    												<div className="mail-text">Hola, esta es Jenny de google. Somos la plataforma online más grande que ofrece...</div>
    												<div className="attached-file-preview d-flex align-items-center mt-15">
    													<div className="file d-flex align-items-center me-2">
    														<img src="/images/lazy.svg" data-src="/dashboard/images/icon/icon_28.svg" alt="" className="lazy-img me-2" />
    														<span>detalles.pdf</span>
    													</div>
    												</div>

    											</div>

    										</div>


    										<div className="email-list-item primary">
    											<div className="email-short-preview position-relative">
    												<div className="d-flex align-items-center justify-content-between">
    													<div className="sender-name">Hasan Islam.</div>
    													<div className="date">22 May</div>
    												</div>
    												<div className="mail-sub">Oportunidades de Diseñador de Productos</div>
    												<div className="mail-text">Hola, saludos de Uber. Espero que estés bien. Me dirijo a ti para...</div>
    											</div>

    										</div>


    										<div className="email-list-item">
    											<div className="email-short-preview position-relative">
    												<div className="d-flex align-items-center justify-content-between">
    													<div className="sender-name">Jakie Chan</div>
    													<div className="date">22 Jul</div>
    												</div>
    												<div className="mail-sub">Buscando Especialista en Marketing</div>
    												<div className="mail-text">Hola, esta es Jannat de HuntX. Ofrecemos soluciones de negocio a nuestro cliente...</div>
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





            <div className="modal fade" id="deleteModal" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-fullscreen modal-dialog-centered">
                    <div className="container">
                        <div className="remove-account-popup text-center modal-content">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    						<img src="/images/lazy.svg" data-src="/dashboard/images/icon/icon_22.svg" alt="" className="lazy-img m-auto" />
    						<h2>¿Estás seguro?</h2>
    						<p>¿Estás seguro de que quieres eliminar tu cuenta? Todos los datos se perderán.</p>
    						<div className="button-group d-inline-flex justify-content-center align-items-center pt-15">
    							<a href="#" className="confirm-btn fw-500 tran3s me-3">Sí</a>
    							<button type="button" className="btn-close fw-500 ms-3" data-bs-dismiss="modal" aria-label="Close">Cancelar</button>
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