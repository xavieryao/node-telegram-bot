function Speech (question) {
  this._client;
  this.question = question;
  this.child = [];
}

Speech.prototype.init = function (command, response, client) {
  var self = this;
  self._client = client;

  if (!self._client.conversations.hasOwnProperty(command)) {
    self._client.conversations[command] = { };
  }

  var chat_id = response.message.from.id;
  self._client.conversations[command][chat_id] = {
    state: 'start',
    answer: [],
    speech: self
  };  

  // console.log(command);
  // console.log(response);
  // console.log(client);
  self._client.sendMessage({
    chat_id: chat_id,
    text: self.question
  });

  return self;
};

Speech.prototype.expand = function (speech, eval) {
  // body...
};

module.exports = Speech;