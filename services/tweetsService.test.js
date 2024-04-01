const tweetsService = require('./tweetsService');
const tweetsRepository = require('../repositories/tweetsRepository');

jest.mock('../repositories/tweetsRepository', () => ({
    getTweets: jest.fn(() => ['tweet1', 'tweet2']),
    createTweet: jest.fn( (tweetCreado) => 'tweet creado'),
    getTweet: jest.fn( (tweetId) => (1)),
    deleteTweet: jest.fn((tweetId) => 1),
    updateTweet: jest.fn((tweetId, content) => [1, 'tweet content'])
}));

describe('[ services / tweetsService ]', () => {
  describe('#getTweets', () => {
    it('should get all tweets', async() => {
      // Arrange
      const expected = ['tweet1', 'tweet2'];

      // Act
      const result = await tweetsService.getTweets();

      // Assert
      expect(result).toEqual(expected);

      // Another Assert
      expect(tweetsRepository.getTweets).toHaveBeenCalled();
    })
  });

  describe('#createTweet', () => {
    it('it should create a tweet and we pass a tweet', async() => {
      // Arrange
      const tweet = 'tweet creado'
      const expected = 'tweet creado';
      // Act
      const result = await tweetsService.createTweet(tweet);

      // Assert
      expect(result).toEqual(expected);

      // Another Assert
      expect(tweetsRepository.createTweet).toHaveBeenCalledWith('tweet creado');
    })
  });

  describe('#getTweet', () => {
    it('it should get tweet if we pass an ID', async() => {
      // Arrange
      const tweetId = 1;
      const expected = 1;

      // Act
      const result = await tweetsService.getTweet(tweetId);

      // Assert
      expect(result).toEqual(expected);

      // Another Assert
      expect(tweetsRepository.getTweet
        ).toHaveBeenCalledWith(tweetId);
    })
  });

  describe('#deleteTweet', () => {
    it('it should delete a tweet if we pass an id', async() => {
      // Arrange
      const tweetId = 1;
      const expected = 1;
      // Act
      const result = await tweetsService.deleteTweet(tweetId);

      // Assert
      expect(result).toEqual(expected);

      // Another Assert
      expect(tweetsRepository.deleteTweet).toHaveBeenCalledWith(tweetId);
    });

    describe('#updateTweet', () => {
      it('it should update a tweet if we pass an id and a content', async() => {
        // Arrange
        const tweetId = 1;
        const content = 'tweet content';
        const expected = [1, 'tweet content'];
        // Act
        const result = await tweetsService.updateTweet(1, 'tweet content');
  
        // Assert
        expect(result).toEqual(expected);
  
        // Another Assert
        expect(tweetsRepository.updateTweet).toHaveBeenCalledWith(tweetId, content);
      })
    });
  });
})