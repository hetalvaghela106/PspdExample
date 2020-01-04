/* src/app/app.component.ts */
import { Component } from '@angular/core';
import PSPDFKit from 'pspdfkit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'angularpdf';

  ngAfterViewInit() {

    PSPDFKit.load({
      baseUrl: location.protocol + "//" + location.host + "/assets/",
      pdf: './assets/example.pdf',
      container: '#app',
        licenseKey: "ySqhUPLUFCuPFQpZJR-tNC3adxK92XoVjmHzfTdtpN1bpv7po9pyjICkmwrSEXKNp2sqLc-8yUBH1jBEAtrvjGWZr8yn76XYxce_AdwIU_ZK1TGjp9uCfmdrzT_n1TDT90iz0OeVJwqTEPqx6T_fJ72fdwrwXAlsULWulnXO0hX0j059IV1nzoa36g2CYYCt9lcxBwmfuHhf_W3jBM9IwBKFvpMIdtLtTC15F4AMLmUnDhflYd9YRTKzMBTgT9v33VLgdOY8bMs5yydCQaxqaE6k-6AuwGLhmp44qIS5LLDswKkSSa5YBu4D4lk1xpAfD3HvS1xnNrSPhvQb8zi2ocXrnNAA6DZLZbzkCI7p8Lo2Fb3YCXhzC8ugqItKcG8jhwFaUj7x3ii_OwqgaVIbAG4YdJdkcwrCogI5FQ3CSsNID4pcYMnSARTF3guwHeQh"

    }).then(function (instance) {
      console.log('PSPDFKit for Web loaded!')

      // For the sake of this demo, store the PSPDFKit for Web instance
      // on the global object so that you can open the dev tools and
      // play with the PSPDFKit API.
      (window as any).instance = instance;
    });

  }
}