Vue.component('product-list',{
    template: `
    <div class="container_section_products">
			<div class="container">
				<div class="row ">
					<div class="col-lg-2 content_products" v-for="product in products">
						<div>
							<div class="hover">
								<a href="#">
									<div class="img_content">
										<img class="img-fluid" :src="product.thumbnail">
									</div>
									<div class="content">
										<strong></strong>
										<div class="info">
											<h2>
											$ {{product.previousPrice}}
											</h2>
											<h3>
												$ {{product.price}} <span>{{product.discount}}</span>
											</h3>
											<h4>
												<!--{{product.shipping}}!-->
											</h4>
										</div>
										<p class="parrafo_bottom">
											{{product.title}}
										</p>
									</div>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>`,
        props: {
            products: Array
        },
        data: function() {
            return {
                shipping: "Envio gratis",
                error: "" 
            }
        }
});