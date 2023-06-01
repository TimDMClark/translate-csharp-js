using System;
using System.Collections.Generic;

namespace Classes
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] insults = {
                "You look like what morning breath smells like.",
                "If you tried to give me CPR I would probably throw myself back underwater.",
                "I am not a fan of you.",
                "You think you're so special...and you are. The fact of your existence is nearly impossible to believe.",
                "I'd rather walk than be on the same plane as you.",
                "If I were given a million dollars to hang out with you...I would, but then I'd have to spend half of it on therapy.",
                "Do you have to be so...like that?"
            };

            List<int> indexes = new List<int>();
            Random random = new Random();

            while (indexes.Count < 3)
            {
                int candidate = getRandomInt(random, 0, insults.Length - 1);
                if (!indexes.Contains(candidate))
                {
                    indexes.Add(candidate);
                }
            }

            foreach (int index in indexes)
            {
                Console.WriteLine(insults[index]);
            }
        }

        static int getRandomInt(Random random, int min, int max)
        {
            return random.Next(min, max + 1);
        }
    }
}
