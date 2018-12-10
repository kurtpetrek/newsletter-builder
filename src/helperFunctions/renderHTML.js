import {
  MAIN_BANNER,
  SPACER,
  HEADER,
  PARAGRAPH,
  FULL_WIDTH_IMAGE,
  BUTTON,
  SMALL_IMAGE,
} from './../constants/constants';

const renderHTML = ({component_blocks, title, description, is_final}) => {
  let start_string = `
  <table class="body" bgcolor="#f3f3f3" style="Margin:0;background-color:#f3f3f3!important;border-collapse:collapse;border-spacing:0;color:#0a0a0a;font-family:'Open Sans','Google Sans',Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;height:100%;hyphens:none;line-height:1.3;margin:0;padding:0;text-align:left;vertical-align:top;width:100%;word-break:normal">
       <tr style="hyphens:none;padding:0;text-align:left;vertical-align:top;word-break:normal">
           <td class="center" align="center" valign="top" style="-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0a0a;font-family:'Open Sans','Google Sans',Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;hyphens:none;line-height:1.3;margin:0;padding:0;text-align:left;vertical-align:top;word-break:normal;word-wrap:break-word">
               <center data-parsed="" style="hyphens:none;min-width:580px;width:100%;word-break:normal">
                   <table align="center" class="container float-center" style="Margin:0 auto;background-color:#fefefe;border-collapse:collapse;border-spacing:0;float:none;hyphens:none;margin:0 auto;padding:0;text-align:center;vertical-align:top;width:580px;word-break:normal">
                       <tbody style="hyphens:none;word-break:normal">
                           <tr style="hyphens:none;padding:0;text-align:left;vertical-align:top;word-break:normal">
                               <td style="-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0a0a;font-family:'Open Sans','Google Sans',Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;hyphens:none;line-height:1.3;margin:0;padding:0;text-align:left;vertical-align:top;word-break:normal;word-wrap:break-word">
  `;
  let content_string = '';
  let end_string = `
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </center>
          </td>
      </tr>
  </table>
  <!-- prevent Gmail on iOS font size manipulation -->
  <div style="display:none;font:15px courier;hyphens:none;line-height:0;white-space:nowrap;word-break:normal">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div>
  `;

  if (is_final) {
    start_string = `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en" style="background-color:#f3f3f3!important">
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
      <meta name="viewport" content="width=device-width">
      <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
      <title>${ title || 'UiPath Internal Newsletter'}</title>
      <style>
          @media only screen {
              html {
                  min-height: 100%;
                  background-color: #fff
              }
              img {
                max-width: 580px !important;
              }
          }

          @media only screen and (max-width:580px) {
              table.body img {
                  width: auto;
                  height: auto
              }
              table.body center {
                  min-width: 0!important
              }
              table.body .container {
                  width: 95%!important
              }
              table.body .columns {
                  height: auto!important;
                  -moz-box-sizing: border-box;
                  -webkit-box-sizing: border-box;
                  box-sizing: border-box;
                  padding-left: 0!important;
                  padding-right: 0!important
              }
              th.small-1 {
                  display: inline-block!important;
                  width: 8.33333%!important
              }
              th.small-10 {
                  display: inline-block!important;
                  width: 83.33333%!important
              }
              th.small-12 {
                  display: inline-block!important;
                  width: 100%!important
              }
          }
      </style>
  </head>
  <body style="-moz-box-sizing:border-box;-ms-text-size-adjust:100%;-webkit-box-sizing:border-box;-webkit-text-size-adjust:100%;background-color:#f3f3f3!important;box-sizing:border-box;color:#0a0a0a;font-family:'Open Sans','Google Sans',Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:1.3;margin:0;min-width:100%;padding:0;text-align:left;width:100%!important"><span class="preheader" style="color:#fff;display:none!important;font-size:1px;hyphens:none;line-height:1px;max-height:0;max-width:0;mso-hide:all!important;opacity:0;overflow:hidden;visibility:hidden;word-break:normal">${description || 'UiPath Internal Newsletter'}</span>
  <table class="body" style="background-color:#f3f3f3!important;border-collapse:collapse;border-spacing:0;color:#0a0a0a;font-size:16px;font-weight:400;height:100%;hyphens:none;line-height:1.3;margin:0;padding:0;text-align:left;vertical-align:top;width:100%;word-break:normal">
       <tr style="hyphens:none;padding:0;text-align:left;vertical-align:top;word-break:normal">
           <td class="center" align="center" valign="top" style="-moz-hyphens:auto;-webkit-hyphens:auto;border-collapse:collapse!important;line-height:1.3;margin:0;padding:0;text-align:left;vertical-align:top;">
               <center data-parsed="" style="hyphens:none;min-width:580px;width:100%;word-break:normal">
                   <table align="center" class="container float-center" style="background-color:#fefefe;border-collapse:collapse;border-spacing:0;float:none;hyphens:none;margin:0 auto;padding:0;text-align:center;vertical-align:top;width:580px;word-break:normal">
                       <tbody style="hyphens:none;word-break:normal">
                           <tr style="hyphens:none;padding:0;text-align:left;vertical-align:top;word-break:normal">
                               <td style="-moz-hyphens:auto;-webkit-hyphens:auto;border-collapse:collapse!important;line-height:1.3;margin:0;padding:0;text-align:left;vertical-align:top;word-break:normal">
    `;

    end_string += `
    </body></html>
    `;
  }

  component_blocks.forEach(obj => {
    switch (obj.type) {
      case MAIN_BANNER:
        content_string += `
        <table class="row" style="border-collapse:collapse;border-spacing:0;display:table;hyphens:none;padding:0;position:relative;text-align:left;vertical-align:top;width:100%;word-break:normal">
            <tbody>
                <tr style="hyphens:none;padding:0;text-align:left;vertical-align:top;word-break:normal">
                    <th class="banner__image-container small-12 large-12 columns first last" style="line-height:1.3;margin:0 auto;padding:27px 38px 0 38px!important;padding-bottom:0;padding-left:0;padding-right:0;text-align:left;width:580px">
                        <table style="border-collapse:collapse;border-spacing:0;hyphens:none;padding:0;text-align:left;vertical-align:top;width:100%;word-break:normal">
                            <tr style="hyphens:none;padding:0;text-align:left;vertical-align:top;word-break:normal">
                                <th style="font-size:16px;line-height:1.3;margin:0;padding:0;text-align:left;"><img src="${obj.img_src}" alt="${obj.img_alt}" class="banner__image" style="-ms-interpolation-mode:bicubic;clear:both;display:block;hyphens:none;max-width:504px;outline:0;text-decoration:none;width:100%;word-break:normal" width="504"/></th>
                                <th class="expander" style="font-size:16px;line-height:1.3;margin:0;padding:0!important;text-align:left;visibility:hidden;width:0"></th>
                            </tr>
                        </table>
                    </th>
                </tr>
            </tbody>
        </table>
        <table class="row" style="border-collapse:collapse;border-spacing:0;display:table;hyphens:none;padding:0;position:relative;text-align:left;vertical-align:top;width:100%;word-break:normal">
            <tbody>
                <tr style="hyphens:none;padding:0;text-align:left;vertical-align:top;word-break:normal">
                    <th class="small-12 large-12 columns first last" style="font-size:16px;line-height:1.3;margin:0 auto;padding:0;padding-bottom:0;padding-left:0;padding-right:0;text-align:left;width:580px">
                        <table style="border-collapse:collapse;border-spacing:0;hyphens:none;padding:0;text-align:left;vertical-align:top;width:100%;word-break:normal">
                            <tr style="hyphens:none;padding:0;text-align:left;vertical-align:top;word-break:normal">
                                <th style="line-height:1.3;margin:0;padding:0;text-align:left">
                                    <p class="banner__date" style="color:#707070;font-family:'Open Sans','Google Sans',Helvetica,Arial,sans-serif;font-size:12px;font-weight:300;hyphens:none;line-height:1.47;margin:auto;margin-bottom:10px;padding:0 38px!important;text-align:right;width:80%;word-break:normal">${obj.date}</p>
                                </th>
                                <th class="expander" style="font-size:16px;line-height:1.3;margin:0;padding:0!important;text-align:left;visibility:hidden;width:0"></th>
                            </tr>
                        </table>
                    </th>
                </tr>
            </tbody>
        </table>
        `;
        break;
      case SPACER:
        content_string += `
        <table class="spacer" ${obj.has_background ? 'bgcolor="#e7edee"' : ''} style="${obj.has_background ? 'background-color:rgba(215,224,226,.59);' : ''}border-collapse:collapse;${obj.has_top_border ? 'border-top: solid 1px #d9d9d9;' : ""}border-spacing:0;padding:0;vertical-align:top;width:100%">
            <tbody>
                <tr style="hyphens:none;padding:0;text-align:left;vertical-align:top;word-break:normal">
                    <td height="${obj.size}px" style="border-collapse:collapse!important;font-size${obj.size}px;line-height:${obj.size}px;margin:0;mso-line-height-rule:exactly;padding:0;vertical-align:top">&#xA0;</td>
                </tr>
            </tbody>
        </table>
        `;
        break;
      case HEADER:
        content_string += `
        <table class="row colored-section" ${obj.has_background ? 'bgcolor="#e7edee"' : ''} style="${obj.has_background ? 'background-color:rgba(215,224,226,.59);' : ''}border-collapse:collapse;border-spacing:0;display:table;hyphens:none;padding:0;position:relative;text-align:left;vertical-align:top;width:100%;word-break:normal">
            <tbody>
                <tr style="hyphens:none;padding:0;text-align:left;vertical-align:top;word-break:normal">
                    <th class="small-1 large-1 columns first" style="margin:0 auto;padding:0;padding-bottom:0;padding-left:0;padding-right:0;width:48px">
                        <table style="border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%">
                            <tr style="padding:0;vertical-align:top">
                                <th style="margin:0;padding:0"></th>
                            </tr>
                        </table>
                    </th>
                    <th class="small-10 large-10 columns" style="line-height:1.3;margin:0 auto;padding:0;padding-bottom:0;padding-left:0;padding-right:0;text-align:left;width:483px">
                        <table style="border-collapse:collapse;border-spacing:0;padding:0;text-align:left;vertical-align:top;width:100%;word-break:normal">
                            <tr style="hyphens:none;padding:0;text-align:left;vertical-align:top;word-break:normal">
                                <th style="line-height:1.3;margin:0;padding:0;text-align:left">
                                  <h2 style="color:#707070;font-family:'Open Sans','Google Sans',Helvetica,Arial,sans-serif;font-size:${obj.font_size ?  obj.font_size + 'px' : '32px'};font-weight:300;hyphens:none;line-height:1.34;margin:0;margin-bottom:10px;padding:0;text-align:center;word-break:normal;word-wrap:normal">${obj.text}</h2></th>
                            </tr>
                        </table>
                    </th>
                    <th class="small-1 large-1 columns last" style="margin:0 auto;padding:0;padding-bottom:0;padding-left:0;padding-right:0;width:48px">
                        <table style="border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%">
                            <tr style="padding:0;vertical-align:top">
                                <th style="margin:0;padding:0"></th>
                            </tr>
                        </table>
                    </th>
                </tr>
            </tbody>
        </table>
        `;
        break;
      case PARAGRAPH:
        content_string += `
        <table class="row" ${obj.has_background ? 'bgcolor="#e7edee"' : ''} style="${obj.has_background ? 'background-color:rgba(215,224,226,.59);' : ''}border-collapse:collapse;border-spacing:0;display:table;hyphens:none;padding:0;position:relative;text-align:left;vertical-align:top;width:100%;word-break:normal">
            <tbody>
                <tr style="hyphens:none;padding:0;text-align:left;vertical-align:top;word-break:normal">
                    <th class="small-1 large-1 columns first" style="margin:0 auto;padding:0;padding-bottom:0;padding-left:0;padding-right:0;text-align:left;width:48px">
                        <table style="border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%">
                            <tr style="padding:0;text-align:left;vertical-align:top">
                                <th style="margin:0;padding:0"></th>
                            </tr>
                        </table>
                    </th>
                    <th class="small-10 large-10 columns" style="margin:0 auto;padding:0;padding-bottom:0;padding-left:0;padding-right:0;text-align:left;width:483px">
                        <table style="border-collapse:collapse;border-spacing:0;hyphens:none;padding:0;text-align:left;vertical-align:top;width:100%;word-break:normal">
                            <tr style="hyphens:none;padding:0;text-align:left;vertical-align:top;word-break:normal">
                                <th style="hyphens:none;line-height:1.3;margin:0;padding:0;text-align:left;word-break:normal">
                                    <p style="color:#707070;font-family:'Open Sans','Google Sans',Helvetica,Arial,sans-serif;font-size:${obj.font_size ? obj.font_size + 'px' : '22px'};font-weight:300;hyphens:none;line-height:1.47;margin:auto;margin-bottom:10px;padding:0;text-align:center;width:80%;word-break:normal">${obj.text}</p>
                                </th>
                            </tr>
                        </table>
                    </th>
                    <th class="small-1 large-1 columns last" style="line-height:1.3;margin:0 auto;padding:0;padding-bottom:0;padding-left:0;padding-right:0;width:48px">
                        <table style="border-collapse:collapse;border-spacing:0;hyphens:none;padding:0;text-align:left;vertical-align:top;width:100%;word-break:normal">
                            <tr style="padding:0;text-align:left;vertical-align:top">
                                <th style="line-height:1.3;margin:0;padding:0"></th>
                            </tr>
                        </table>
                    </th>
                </tr>
            </tbody>
        </table>
        `;
        break;
      case FULL_WIDTH_IMAGE:
        content_string += `
        <table class="row" style="border-collapse:collapse;border-spacing:0;display:table;padding:0;position:relative;text-align:left;vertical-align:top;width:100%">
            <tbody>
                <tr style="padding:0;text-align:left;vertical-align:top">
                    <th class="small-12 large-12 columns first last" style="margin:0 auto;padding:0;padding-bottom:0;padding-left:0;padding-right:0;text-align:left;width:580px">
                        <table style="border-collapse:collapse;border-spacing:0;hyphens:none;padding:0;text-align:left;vertical-align:top;width:100%;word-break:normal">
                            <tr style="hyphens:none;padding:0;text-align:left;vertical-align:top;word-break:normal">
                                <th style="line-height:1.3;margin:0;padding:0;text-align:left">
                                ${
                                  obj.is_link ?
                                  `<a href="${obj.link_href}" target="_blank" rel="noopener noreferrer" style="margin:0;padding:0;text-align:left;text-decoration:underline">`
                                  : ''
                                }
                                <img src="${obj.img_src}" alt="${obj.img_alt}" class="full-image" style="-ms-interpolation-mode:bicubic;clear:both;display:block;max-width:580px;outline:0;text-decoration:none;width:100%;word-break:normal" width="580"/>
                                ${
                                  obj.is_link ?
                                  `</a>`
                                  : ''
                                }
                                </th>
                                <th class="expander" style="font-size:16px;line-height:1.3;margin:0;padding:0!important;text-align:left;visibility:hidden;width:0"></th>
                            </tr>
                        </table>
                    </th>
                </tr>
            </tbody>
        </table>
        `;
        break;
      case BUTTON:
        content_string += `
        <table class="row" ${obj.has_background ? 'bgcolor="#e7edee"' : ''} style="${obj.has_background ? 'background-color:rgba(215,224,226,.59);' : ''}border-collapse:collapse;border-spacing:0;display:table;hyphens:none;padding:0;position:relative;text-align:left;vertical-align:top;width:100%;word-break:normal">
            <tbody>
                <tr style="hyphens:none;padding:0;text-align:left;vertical-align:top;word-break:normal">
                    <th class="small-12 large-12 columns first last" style="line-height:1.3;margin:0 auto;padding:0;padding-bottom:0;padding-left:0;padding-right:0;text-align:left;width:580px">
                        <table style="border-collapse:collapse;border-spacing:0;padding:0;text-align:left;vertical-align:top;width:100%">
                            <tr style="hyphens:none;padding:0;text-align:left;vertical-align:top;word-break:normal">
                                <th style="margin:0;padding:0;text-align:left">
                                    <center data-parsed="" style="hyphens:none;min-width:580px;width:100%;word-break:normal">
                                        <table class="button float-center" style="border-collapse:collapse;border-spacing:0;float:none;margin:0 0 16px 0;padding:0;text-align:center;vertical-align:top;width:auto">
                                            <tr style="hyphens:none;padding:0;text-align:left;vertical-align:top;word-break:normal">
                                                <td style="-moz-hyphens:auto;-webkit-hyphens:auto;line-height:1.3;margin:0;padding:0;text-align:left;vertical-align:top;word-break:normal">
                                                    <table style="border-collapse:collapse;border-spacing:0;hyphens:none;padding:0;text-align:left;vertical-align:top;width:100%;word-break:normal">
                                                        <tr style="hyphens:none;padding:0;text-align:left;vertical-align:top;word-break:normal">
                                                            <td style="-moz-hyphens:auto;-webkit-hyphens:auto;background-color:#ff6a00;border:2px solid #ff6a00;border-collapse:collapse!important;color:#fefefe;font-family:'Open Sans','Google Sans',Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;hyphens:none;line-height:1.3;margin:0;padding:0;text-align:left;vertical-align:top;word-break:normal;word-wrap:break-word"><a href="${obj.href}" target="_blank" rel="noopener noreferrer" style="border:0 solid #ff6a00;border-radius:3px;color:#fefefe;display:inline-block;font-family:'Open Sans','Google Sans',Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;hyphens:none;line-height:1.3;margin:0;padding:15px 27px 15px 27px;text-align:left;text-decoration:none;word-break:normal;font-style: bold;">${obj.text}</a></td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </center>
                                </th>
                                <th class="expander" style=margin:0;padding:0!important;text-align:left;visibility:hidden;width:0;word-break:normal"></th>
                            </tr>
                        </table>
                    </th>
                </tr>
            </tbody>
        </table>
        `;
        break;
      case SMALL_IMAGE:
        content_string += `
        <table class="row" ${obj.has_background ? 'bgcolor="#e7edee"' : ''} style="${obj.has_background ? 'background-color:rgba(215,224,226,.59);' : ''}border-collapse:collapse;border-spacing:0;display:table;hyphens:none;padding:0;position:relative;text-align:left;vertical-align:top;width:100%;word-break:normal">
          <tbody>
              <tr style="hyphens:none;padding:0;text-align:left;vertical-align:top;word-break:normal">
                  <th class="small-12 large-12 columns first last" style="margin:0 auto;padding:0;padding-bottom:0;padding-left:0;padding-right:0;text-align:left;width:580px;word-break:normal">
                      <table style="border-collapse:collapse;border-spacing:0;hyphens:none;padding:0;text-align:left;vertical-align:top;width:100%;word-break:normal">
                          <tr style="hyphens:none;padding:0;text-align:left;vertical-align:top;word-break:normal">
                              <th style="hyphens:none;line-height:1.3;margin:0;padding:0;text-align:left;word-break:normal">
                                  <center data-parsed="" style="hyphens:none;min-width:580px;width:100%;word-break:normal"><img src="${obj.img_src}" alt="${obj.img_alt}" class="footer-image float-center" align="center" style="-ms-interpolation-mode:bicubic;Margin:0 auto;clear:both;display:block;float:none;hyphens:none;margin:0 auto;max-width:100%;outline:0;text-align:center;text-decoration:none;width:113px!important;word-break:normal" width="113"></center>
                              </th>
                              <th class="expander" style="line-height:1.3;margin:0;padding:0!important;text-align:left;visibility:hidden;width:0;word-break:normal"></th>
                          </tr>
                      </table>
                  </th>
              </tr>
          </tbody>
        </table>
        `;
        break;
      default:

    }
  });

  return start_string + content_string + end_string;
}

export default renderHTML;
