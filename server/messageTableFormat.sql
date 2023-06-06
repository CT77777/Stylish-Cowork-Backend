CREATE TABLE chat_messages (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    chat_room_id BIGINT UNSIGNED NOT NULL,
    sender_id BIGINT NOT NULL,
    `message` VARCHAR(500) NOT NULL,
    time_stamp BIGINT NOT NULL,
    FOREIGN KEY (chat_room_id) REFERENCES users (id)
);