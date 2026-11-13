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
    						<li className="plr"><a href="/dashboard/dashboard-index" className="d-flex w-100 align-items-center">
    							<img src="/dashboard/images/icon/icon_1.svg" alt="" />
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
    						<li className="plr"><a href="/dashboard/add-property" className="d-flex w-100 align-items-center active">
    							<img src="/dashboard/images/icon/icon_7_active.svg" alt="" />
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
    						<h4 className="m0 d-none d-lg-block">Añadir Propiedad</h4>
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


    				<h2 className="main-title d-block d-lg-none">Añadir Propiedad</h2>

    				<div className="bg-white card-box border-20">
                        <h4 className="dash-title-three">Resumen</h4>
                        <div className="dash-input-wrapper mb-30">
                            <label htmlFor="">Título de la Propiedad*</label>
                            <input type="text" placeholder="Nombre de tu Propiedad" />
                        </div>

                        <div className="dash-input-wrapper mb-30">
                            <label htmlFor="">Descripción*</label>
                            <textarea className="size-lg" placeholder="Escribe sobre la propiedad..."></textarea>
                        </div>

                        <div className="row align-items-end">
                            <div className="col-md-6">
                                <div className="dash-input-wrapper mb-30">
                                    <label htmlFor="">Categoría*</label>
                                    <select className="nice-select">
    									<option value="1">Apartamentos</option>
    									<option value="2">Condominios</option>
    									<option value="3">Casas</option>
    									<option value="4">Industriales</option>
    									<option value="6">Villas</option>
    								</select>
                                </div>

                            </div>
                            <div className="col-md-6">
                                <div className="dash-input-wrapper mb-30">
                                    <label htmlFor="">Listado en*</label>
                                    <select className="nice-select">
    									<option>Todas las Propiedades</option>
    									<option>Comprar</option>
                                        <option>Vender</option>
                                        <option>Alquilar</option>
    								</select>
                                </div>

                            </div>
                            <div className="col-md-6">
                                <div className="dash-input-wrapper mb-30">
    								<label htmlFor="">Precio*</label>
                                    <input type="text" placeholder="Tu Precio" />
                                </div>

                            </div>
                            <div className="col-md-6">
                                <div className="dash-input-wrapper mb-30">
    								<label htmlFor="">Tasa de Impuesto Anual*</label>
                                    <input type="text" placeholder="Tasa de Impuesto" />
                                </div>

                            </div>
                        </div>
                    </div>

    				<div className="bg-white card-box border-20 mt-40">
    					<h4 className="dash-title-three">Detalles del Anuncio</h4>
    					<div className="row align-items-end">
                            <div className="col-md-6">
                                <div className="dash-input-wrapper mb-30">
                                    <label htmlFor="">Tamaño en m²*</label>
                                    <input type="text" placeholder="Ej: 3,210 m²" />
                                </div>

                            </div>
                            <div className="col-md-6">
                                <div className="dash-input-wrapper mb-30">
                                    <label htmlFor="">Habitaciones*</label>
                                    <select className="nice-select">
    									<option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
    								</select>
                                </div>

                            </div>
                            <div className="col-md-6">
                                <div className="dash-input-wrapper mb-30">
                                    <label htmlFor="">Baños*</label>
                                    <select className="nice-select">
    									<option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
    								</select>
                                </div>

                            </div>
    						<div className="col-md-6">
                                <div className="dash-input-wrapper mb-30">
                                    <label htmlFor="">Cocinas*</label>
                                    <select className="nice-select">
    									<option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
    								</select>
                                </div>

                            </div>
    						<div className="col-md-6">
                                <div className="dash-input-wrapper mb-30">
                                    <label htmlFor="">Garajes</label>
                                    <select className="nice-select">
    									<option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
    								</select>
                                </div>

                            </div>
    						<div className="col-md-6">
                                <div className="dash-input-wrapper mb-30">
                                    <label htmlFor="">Tamaño del Garaje</label>
                                    <input type="text" placeholder="Ej: 1,230 m²" />
                                </div>

                            </div>
    						<div className="col-md-6">
                                <div className="dash-input-wrapper mb-30">
                                    <label htmlFor="">Año de Construcción*</label>
                                    <input type="text" placeholder="Escribe el Año" />
                                </div>

                            </div>
                            <div className="col-md-6">
                                <div className="dash-input-wrapper mb-30">
                                    <label htmlFor="">Número de Pisos*</label>
                                    <select className="nice-select">
    									<option value="0">Planta Baja</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
    								</select>
                                </div>

                            </div>
    						<div className="col-12">
    							<div className="dash-input-wrapper">
    								<label htmlFor="">Descripción*</label>
    								<textarea className="size-lg" placeholder="Escribe sobre la propiedad..."></textarea>
    							</div>

    						</div>
                        </div>
    				</div>


    				<div className="bg-white card-box border-20 mt-40">
    					<h4 className="dash-title-three">Adjuntar Foto y Video</h4>
                        <div className="dash-input-wrapper mb-20">
                            <label htmlFor="">Archivo Adjunto*</label>

                            <div className="attached-file d-flex align-items-center justify-content-between mb-15">
                                <span>ImagenPropiedad_01.jpg</span>
                                <a href="#" className="remove-btn"><i className="bi bi-x"></i></a>
                            </div>
    						<div className="attached-file d-flex align-items-center justify-content-between mb-15">
                                <span>ImagenPropiedad_02.jpg</span>
                                <a href="#" className="remove-btn"><i className="bi bi-x"></i></a>
                            </div>
                        </div>

                        <div className="dash-btn-one d-inline-block position-relative me-3">
                            <i className="bi bi-plus"></i>
                            Subir Archivo
                            <input type="file" id="uploadCV" name="uploadCV" placeholder="" />
                        </div>
                        <small>Sube archivos .jpg, .png, .mp4</small>
    				</div>


    				<div className="bg-white card-box border-20 mt-40">
    					<h4 className="dash-title-three m0 pb-5">Seleccionar Comodidades</h4>
    					<ul className="style-none d-flex flex-wrap filter-input">
    						<li>
    							<input type="checkbox" name="Amenities" value="01" />
    							<label>A/C y Calefacción</label>
    						</li>
    						<li>
    							<input type="checkbox" name="Amenities" value="02" placeholder="" />
    							<label>Garajes</label>
    						</li>
    						<li>
    							<input type="checkbox" name="Amenities" value="03" />
    							<label>Piscina</label>
    						</li>
    						<li>
    							<input type="checkbox" name="Amenities" value="04" />
    							<label>Estacionamiento</label>
    						</li>
    						<li>
    							<input type="checkbox" name="Amenities" value="05" />
    							<label>Vista al Lago</label>
    						</li>
    						<li>
    							<input type="checkbox" name="Amenities" value="06" />
    							<label>Jardín</label>
    						</li>
    						<li>
    							<input type="checkbox" name="Amenities" value="07" />
    							<label>Acceso para Discapacitados</label>
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
    							<label>Ducha Exterior</label>
    						</li>
    						<li>
    							<input type="checkbox" name="Amenities" value="11" />
    							<label>Refrigerador</label>
    						</li>
    						<li>
    							<input type="checkbox" name="Amenities" value="12" />
    							<label>Chimenea</label>
    						</li>
    						<li>
    							<input type="checkbox" name="Amenities" value="13" />
    							<label>Wifi</label>
    						</li>
    						<li>
    							<input type="checkbox" name="Amenities" value="14" />
    							<label>TV por Cable</label>
    						</li>
    						<li>
    							<input type="checkbox" name="Amenities" value="15" />
    							<label>Parrilla</label>
    						</li>
    						<li>
    							<input type="checkbox" name="Amenities" value="16" />
    							<label>Lavandería</label>
    						</li>
    						<li>
    							<input type="checkbox" name="Amenities" value="17" />
    							<label>Secadora</label>
    						</li>
    						<li>
    							<input type="checkbox" name="Amenities" value="18" />
    							<label>Césped</label>
    						</li>
    						<li>
    							<input type="checkbox" name="Amenities" value="19" />
    							<label>Ascensor</label>
    						</li>
    					</ul>
    				</div>


    				<div className="bg-white card-box border-20 mt-40">
    					<h4 className="dash-title-three">Dirección y Ubicación</h4>
    					<div className="row">
    						<div className="col-12">
    							<div className="dash-input-wrapper mb-25">
    								<label htmlFor="">Dirección*</label>
    								<input type="text" placeholder="145/A, Ranchview" />
    							</div>

    						</div>
    						<div className="col-lg-4">
    							<div className="dash-input-wrapper mb-25">
    								<label htmlFor="">País*</label>
    								<select className="nice-select">
    									<option value="0">Seleccionar País</option>
    									<option>Afghanistán</option>
    									<option>Albania</option>
    									<option>Argelia</option>
    									<option>Andorra</option>
    									<option>Angola</option>
    									<option>Antigua y Barbuda</option>
    									<option>Argentina</option>
    									<option>Armenia</option>
    									<option>Australia</option>
    									<option>Austria</option>
    									<option>Azerbaiyán</option>
    									<option>Bahamas</option>
    									<option>Baréin</option>
    									<option>Bangladés</option>
    									<option>Barbados</option>
    									<option>Bielorrusia</option>
    									<option>Bélgica</option>
    									<option>Belice</option>
    									<option>Benín</option>
    									<option>Bután</option>
    								</select>
    							</div>

    						</div>
    						<div className="col-lg-4">
    							<div className="dash-input-wrapper mb-25">
    								<label htmlFor="">Ciudad*</label>
    								<select className="nice-select">
    									<option value="0">Seleccionar Ciudad</option>
    									<option>Dhaka</option>
    									<option>Tokio</option>
    									<option>Delhi</option>
    									<option>Shanghái</option>
    									<option>Bombay</option>
    									<option>Bangalore</option>
    								</select>
    							</div>

    						</div>
    						<div className="col-lg-4">
    							<div className="dash-input-wrapper mb-25">
    								<label htmlFor="">Estado*</label>
    								<select className="nice-select">
    									<option value="0">Seleccionar Estado</option>
    									<option>Dhaka</option>
    									<option>Tokio</option>
    									<option>Delhi</option>
    									<option>Shanghái</option>
    									<option>Bombay</option>
    									<option>Bangalore</option>
    								</select>
    							</div>

    						</div>
    						<div className="col-12">
    							<div className="dash-input-wrapper mb-25">
    								<label htmlFor="">Ubicación en el Mapa*</label>
    								<div className="position-relative">
    									<input type="text" placeholder="XC23+6XC, Moiran, N105" />
    									<button className="location-pin tran3s"><img src="/images/lazy.svg" data-src="/dashboard/images/icon/icon_16.svg" alt="" className="lazy-img m-auto" /></button>
    								</div>
    								<div className="map-frame mt-30">
    									<div className="gmap_canvas h-100 w-100">
    										<iframe className="gmap_iframe h-100 w-100" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=dhaka collage&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
    									</div>
    								</div>
    							</div>

    						</div>
    					</div>
    				</div>

    				<div className="button-group d-inline-flex align-items-center mt-30">
    					<a href="#" className="dash-btn-two tran3s me-3">Enviar Propiedad</a>
    					<a href="#" className="dash-cancel-btn tran3s">Cancelar</a>
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