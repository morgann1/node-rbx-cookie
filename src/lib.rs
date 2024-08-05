#![deny(clippy::all)]

use napi_derive::napi;

#[napi]
pub fn get_value() -> String {
  match rbx_cookie::get_value() {
    Some(c) => c,
    None => "".to_string(),
  }
}

#[napi]
pub fn get() -> String {
  match rbx_cookie::get() {
    Some(c) => c,
    None => "".to_string(),
  }
}
