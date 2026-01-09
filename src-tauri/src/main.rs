// Prevents additional console window on Windows in release, DO NOT REMOVE!!

#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::command;

// A simple command that can be called from the frontend
#[command]
fn greet(name: String) -> String {
    format!("Hello, {}! 👋 From Rust", name)
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
